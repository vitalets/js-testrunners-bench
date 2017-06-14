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

createCharts();

function createCharts() {
  Object.keys(data).sort(sorter).forEach(key => {
    const testsCount = data[key].testsCount;
    const title = `${testsCount} ${getReadableName(key)}`;
    createContentsLink(key, title);
    createChart(key, title, data[key].result);
  });
}

function createChart(key, title, runs) {
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
  drawChart(key, title, labels, datasets);
}

function createContentsLink(key, title) {
  const a = document.createElement('a');
  a.href = `#${key}`;
  a.textContent = title;
  const li = document.createElement('li');
  li.appendChild(a);
  document.getElementById('contents').appendChild(li);
}

function drawChart(key, title, labels, datasets) {
  const wrapper = document.createElement('div');
  const canvas = document.createElement('canvas');
  canvas.id = key;
  canvas.height = window.devicePixelRatio === 1
    ? 10 * labels.length + 10
    : window.devicePixelRatio * Math.max(90, 15 * labels.length + 10);
  wrapper.appendChild(canvas);
  document.getElementById('charts').appendChild(wrapper);
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
        text: ' '.repeat(0) + title
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

function sorter(a, b) {
  return a > b ? -1 : (a < b ? 1 : 0);
}
