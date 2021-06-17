const parser = new DOMParser();
let data = '';
let valueСurrencyata = [];
let dateСurrencyata = [];
let firstDate;
let secondDate;
const checkDate = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
const regGetDate = /Date="(.*?)\"/g;
const regGetValue = /<Value>([\s\S]+?)<.V/g;

async function getData() {
  const response = await fetch('http://localhost:8080/');
  data = await response.text();
  return data;
}

function postData() {
  jQuery.ajax({
    type: 'POST',
    url: 'http://localhost:8080/',
    data: { date1: firstDate, date2: secondDate },
    // success: function (resp) { },
    error: function (xhr, str) {
      alert('The server is not responding. try again later :(');
    },
  });

  /*
    const qwe = JSON.stringify({ firstDate, secondDate });
    console.log(qwe);

    fetch('http://localhost:8080/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: qwe,
    });
  */
}

function parsingData(receivedData) {
  console.log(receivedData);

  dateСurrencyata = receivedData.match(regGetDate);
  console.log(dateСurrencyata);
  valueСurrencyata = receivedData.match(regGetValue);
  console.log(valueСurrencyata);

  for (let i = 0; i < dateСurrencyata.length; i += 1) {
    dateСurrencyata[i] = dateСurrencyata[i].replace(/[^0-9,.]/g, '');
  }

  for (let i = 0; i < valueСurrencyata.length; i += 1) {
    valueСurrencyata[i] = valueСurrencyata[i].replace(/[^0-9.,]/g, '');
    valueСurrencyata[i] = valueСurrencyata[i].replace(',', '.');
  }

  return [dateСurrencyata, valueСurrencyata];
}

function getDate() {
  arrFirstDate = [];
  arrSecondDate = [];

  firstDate = document.querySelector('.getFirstDate').value;
  if (firstDate === '') {
    alert('Incorrect data entered. Try again.');
    return false;
  }
  arrFirstDate = firstDate.split('-');
  firstDate = arrFirstDate[2] + '/' + arrFirstDate[1] + '/' + arrFirstDate[0];

  secondDate = document.querySelector('.getSecondDate').value;
  if (secondDate === '') {
    alert('Incorrect data entered. Try again.');
    return false;
  }
  arrSecondDate = secondDate.split('-');
  secondDate = arrSecondDate[2] + '/' + arrSecondDate[1] + '/' + arrSecondDate[0];

  return true;
}
