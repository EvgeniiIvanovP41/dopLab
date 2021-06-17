const express = require('express');
// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fetch = require('node-fetch');
const DomParser = require('dom-parser');
const bodyParser = require('body-parser');

const parser = new DomParser();
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

let firstDate;
let secondDate;

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
  next();
});

async function getData() {
  try {
    const res = await fetch(`http://www.cbr.ru/scripts/XML_dynamic.asp?date_req1=${firstDate}}&date_req2=${secondDate}&VAL_NM_RQ=R01235`);
    return await res.text();
  } catch (err) {
    console.log(err);
    return {
      error: "Server error. Couldn't get the currency data" + firstDate + secondDate
    };
  }
}

app.get('/', async function (request, response) {
  response.send(await getData());
});

app.post('/', function (req, res) {
  /*
    const salam = req.body;
    console.log(salam);
  */
  firstDate = req.body.date1;
  secondDate = req.body.date2;
});

app.listen(8080);
console.log('Сервер стартовал!');
