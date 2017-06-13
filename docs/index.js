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

Object.keys(data).forEach(key => {
  const testsCount = data[key].testsCount;
  const title = `${testsCount} ${getReadableName(key)}`;
  createChart(title, data[key].result);
});

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
  const canvas = document.createElement('canvas');
  canvas.height = labels.length * 15 + 20;
  document.getElementById('charts').appendChild(canvas);
  new Chart(canvas, {
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
        fontSize: 16,
        text: title
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          stacked: true,
          ticks: {
            fontSize: 14,
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true,
            fontSize: 14,
            suggestedMax: datasets.slice(-1)[0].data.slice(-1)[0] * 1.1
          },
          scaleLabel: {
            display: true,
            fontSize: 14,
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

function getReadableName(key) {
  const map = {
    'sync': 'synchronous tests',
    'async': 'asynchronous tests',
    'hooks=0': 'no hooks',
    'hooks=1': 'with hooks',
    'hooks=0.5': 'with 50% hooks',
    'nestedSuites=0': 'no nested suites',
    'nestedSuites=1': 'with nested suites',
    'delay=0': 'delay 0ms',
    'delay=0-10': 'random delay 0-10ms',
  };
  return key.split('_')
    .map(item => map[item] || item)
    .join(', ');
}
