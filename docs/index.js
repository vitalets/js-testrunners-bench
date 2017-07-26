
function log(s) {
  document.querySelector('.log').textContent += String(s);
}

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

const chart = document.querySelector('.chart');
const filterForm = document.querySelector('.filter');

submitOnChange();
const benchKey = getKeyFromUrl() || Object.keys(data)[0];
populateForm(benchKey);
update(benchKey);

function submitOnChange() {
  filterForm.addEventListener('change', () => {
    filterForm.submit();
  });
}

function populateForm(benchKey) {
  benchKey
    .split('_')
    .map(str => str.split('='))
    .forEach(([name, value]) => filterForm.elements[name].value = value);
}

function update(benchKey) {
  chart.innerHTML = '';
  const benchData = data[benchKey];
  if (!benchData) {
    showNoBench();
  } else {
    const title = getTitle(benchData);
    const datasets = getDatasets(benchData);
    const labels = getLabels(benchData);
    drawChart(title, labels, datasets);
  }
}

function getKeyFromUrl() {
  const url = new URL(location.href);
  return url.search.slice(1).replace(/\&/g, '_');
}

function getTitle(benchData) {
  return `${benchData.genConfig.tests} ${benchData.name.replace(/_/g, ', ')}`;
}

function getLabels(benchData) {
  return benchData.runs.map(run => run.label);
}

function getDatasets(benchData) {
  return benchData.runs.map((run, index) => {
    return {
      label: run.label,
      data: getChartData(index, run.time),
      backgroundColor: colors[index],
    };
  });
}

function drawChart(title, labels, datasets) {
  const canvas = document.createElement('canvas');
  chart.appendChild(canvas);
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

function getChartData(index, value) {
  const data = [];
  for(let i = 0; i < index; i++) {
    data.push(0);
  }
  data.push(parseFloat(value));
  return data;
}

function showNoBench() {
  chart.innerHTML = '<div class="nodata">No data for that filter</div>';
}
