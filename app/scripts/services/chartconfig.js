'use strict';

/**
 * @ngdoc service
 * @name webappSrcApp.chartConfig
 * @description
 * # chartConfig
 * Factory in the webappSrcApp.
 */
angular.module('IoDApp')
  .factory('chartConfig', function () {

    // Public API here
    return {
      lineChart: function (chartTitle, xLabel, yLabel) {
        return {
          chart: {
            type: 'lineChart',
            height: 450,
            margin: {
              top: 20,
              right: 20,
              bottom: 40,
              left: 55
            },
            x: function (d) {
              return d.x;
            },
            y: function (d) {
              return d.y;
            },
            useInteractiveGuideline: true,
            xAxis: {
              axisLabel: xLabel,
              tickFormat: function (d) {
                return d3.time.format('%d-%b')(new Date(d));
              }
            },
            yAxis: {
              axisLabel: yLabel,
              tickFormat: function (d) {
                return d3.format('.02f')(d);
              },
              axisLabelDistance: -10
            }
          },
          title: {
            enable: true,
            text: chartTitle
          }
        };
      }
    };
  });
