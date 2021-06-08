var check = false;
var chart = new Chart();

async function drawingTable(data) {
  console.log(data);

  if (!check) {
    chart = new Chart();
  }

  chart.destroy();

  var ctx = document.getElementById('myChart').getContext('2d');

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data[0],
      datasets: [{
        label: "Курс доллара",
        backgroundColor: ['red', 'yellow', 'green'],
        borderColor: 'rgb(255, 99, 132)',
        data: data[1],
      }]
    },
    options: {}
  });
  check = true;
}