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
      temperatureConfig: function (chartTitle, cb) {
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
            dispatch: {
              stateChange: function (e) {
                console.log("stateChange");
              },
              changeState: function (e) {
                console.log("changeState");
              },
              tooltipShow: function (e) {
                console.log("tooltipShow");
              },
              tooltipHide: function (e) {
                console.log("tooltipHide");
              }
            },
            xAxis: {
              axisLabel: 'Time/Date',
              tickFormat: function (d) {
                return d3.time.format('%d-%b')(new Date(d));
              }
            },
            yAxis: {
              axisLabel: 'Temperature (C)',
              tickFormat: function (d) {
                return d3.format('.02f')(d);
              },
              axisLabelDistance: -10
            },
            callback: function (chart) {
              if(cb){
                cb();
              }
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
