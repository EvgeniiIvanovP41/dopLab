var parser = new DOMParser();
let data = "";
let valueСurrencyata = [];
let dateСurrencyata = [];
let firstDate = 0;
let secondDate = 0;
var checkDate = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
var regGetDate = /Date="(.*?)\"/g;
var regGetValue = /<Value>([\s\S]+?)<.V/g;

async function getData() {
  let response = await fetch('http://localhost:8080/');
  data = await response.text();
  return data;
}

function postData() {
  jQuery.ajax({
    type: 'POST',
    url: 'http://localhost:8080/',
    data: { date1: firstDate, date2: secondDate },
    success: function (resp) {
      alert(resp);
    },
    error: function (xhr, str) {
      alert('Возникла ошибка: ' + xhr.responseCode);
    }
  });
}

function parsingData(receivedData) {
  console.log(receivedData);

  dateСurrencyata = receivedData.match(regGetDate);
  console.log(dateСurrencyata);
  valueСurrencyata = receivedData.match(regGetValue);
  console.log(valueСurrencyata);

  for (let i = 0; i < dateСurrencyata.length; i++) {
    dateСurrencyata[i] = dateСurrencyata[i].replace(/[^0-9,.]/g, '');
  }

  for (let i = 0; i < valueСurrencyata.length; i++) {
    valueСurrencyata[i] = valueСurrencyata[i].replace(/[^0-9.,]/g, '');
    valueСurrencyata[i] = valueСurrencyata[i].replace(',', '.');
  }

  return [dateСurrencyata, valueСurrencyata];
}

function getDate() {
  firstDate = document.querySelector('.getFirstDate').value;
  if (!checkDate.test(firstDate)) {
    alert("Incorrect data entered. Try again.")
    return false;
  }
  secondDate = document.querySelector('.getSecondDate').value;
  if (!checkDate.test(secondDate)) {
    alert("Incorrect data entered. Try again.")
    return false;
  }
}