// generate colors: http://tools.medialab.sciences-po.fr/iwanthue/index.php

const colors = [
  "#bf4e40",
  "#cda443",
  "#526139",
  "#7b48c0",
  "#7b95c3",
  "#c95aa2",
  "#76cca4",
  "#cbaf9f",
  "#92d04f",
  "#4e304a",
];

// Object.keys(data).forEach(createChart);

createChart('Synchronous tests, no nested suites, no hooks, no Babel', data['sync_hooks=0_nestedSuites=0']['no Babel']);
// createChart('Synchronous tests, no nested suites, no hooks, no Babel', data['sync_hooks=0_nestedSuites=0']['no Babel']);

function createChart(title, runs) {
  const datasets = [];
  const labels = [];
  runs.forEach((run, index) => {
    labels.push(run.runner);
    datasets.push({
      label: run.runner,
      data: getData(index, run.time),
      backgroundColor: colors[index],
    });
  });
  drawChart(title, labels, datasets);
}

function drawChart(title, labels, datasets) {
  new Chart('chart', {
    type: 'horizontalBar',
    data: {
      labels,
      datasets,
    },
    options: {
      tooltips: {
        enabled: false,
      },
      title: {
        display: true,
        text: title
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          stacked: true
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: 'time (s)'
          }
        }]
      }
    }
  });
}

function getData(index, value) {
  const data = [];
  for(let i = 0; i < index; i++) {
    data.push(0);
  }
  data.push(parseFloat(value));
  return data;
}
