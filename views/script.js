// Using chart.js to draw report chart
// here *labels* are dynamic from the json data provided by the /api/reportData
// But the *dataset* here is static
// eslint-disable-next-line no-unused-vars
function renderChart(data) {
  // eslint-disable-next-line no-undef
  return new Chart(myChart, {
    type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      labels: Object.keys(data),
      datasets: [{
        label: 'Technology',
        data: [
          1,
          1
        ],
        backgroundColor: 'red',
      },
      {
        label: 'Sports',
        data: [
          3,
          0
        ],
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: '#777',
        hoverBorderWidth: 3,
        hoverBorderColor: '#000'
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Analysis by country and category',
        fontSize: 25
      },
      legend: {
        display: true,
        position: 'right',
        labels: {
          fontColor: '#000'
        }
      },
      layout: {
        padding: {
          left: 50,
          right: 0,
          bottom: 0,
          top: 0
        }
      },
      tooltips: {
        enabled: true
      }
    }
  });
}
