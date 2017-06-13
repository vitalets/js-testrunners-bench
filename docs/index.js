// generate colors: http://tools.medialab.sciences-po.fr/iwanthue/index.php

const colors = [
  "#3592ff",
  "#f74241",
  "#5ade5e",
  "#971da8",
  "#00d3a7",
  "#3447b5",
  "#ea6315",
  "#deb8f8",
  "#865e00",
  "#694673",
  "#ff8fa1",
  "#883c26",
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
        text: ' '.repeat(22) + title
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
