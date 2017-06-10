// generate colors: http://tools.medialab.sciences-po.fr/iwanthue/index.php

var colors = [
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


new Chart('chart', {
  type: 'horizontalBar',
  data: {
    labels: ["Sync", "Sync + Babel", "Async"],
    datasets: [
      {
        label: "Mocha",
        backgroundColor: colors[0],
        // backgroundColor: backgroundColor[0],
        // borderColor: borderColor[0],
       // borderWidth: 1,
        data: [2, 10, 5],
      },
      {
        label: "AVA",
        backgroundColor: colors[1],
        // backgroundColor: backgroundColor[1],
        // borderColor: borderColor[1],
       // borderWidth: 1,
        // backgroundColor: 'rgb(255, 99, 132)',
        // borderColor: 'rgb(255, 99, 132)',
        data: [5, 6, 7],
      },
      {
        label: "Jest",
        backgroundColor: colors[2],
        // backgroundColor: backgroundColor[2],
        // borderColor: borderColor[2],
       // borderWidth: 1,
        // backgroundColor: 'rgb(255, 99, 132)',
        // borderColor: 'rgb(255, 99, 132)',
        data: [4, 8, 5],
      }
    ]
  },
  options: {
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});
