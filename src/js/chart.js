let chart = new Chart();

const ctx = document.getElementById('myChart').getContext('2d');

chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Курс доллара',
      fillColor: 'rgba(220,220,220,0.0)',
      strokeColor: 'rgba(220,220,220,0)',
      pointColor: 'rgba(220,220,220,0)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(220,220,220,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    }],
  },
  options: {
    responsive: false
  },
});

async function drawingTable(data) {
  chart.destroy();

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data[0],
      datasets: [{
        label: 'Курс доллара',
        backgroundColor: ['red', 'yellow', 'green'],
        borderColor: 'rgb(255, 99, 132)',
        data: data[1],
      }],
    },
    options: {
      responsive: false
    },
  });
}
