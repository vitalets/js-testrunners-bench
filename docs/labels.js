Chart.plugins.register({
  afterDatasetsDraw: function(ctrl) {
    var chart = ctrl.chart;
    var ctx = chart.ctx;
    ctrl.data.datasets.forEach(function (dataset, i) {
      //var meta = chart.getDatasetMeta(i);
      var meta = dataset._meta[0];
      if (!meta.hidden) {
        meta.data.forEach(function(element, index) {
          if (dataset.data[index] === 0) {
            return;
          }
          ctx.fillStyle = '#666';
          var fontSize = 12;
          var fontStyle = 'normal';
          var fontFamily = 'Helvetica Neue';
          ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
          var dataString = dataset.data[index].toString();
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          var position = element.tooltipPosition();
          ctx.fillText(dataString, position.x + 5, position.y);
        });
      }
    });
  }
});
