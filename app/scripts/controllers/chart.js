'use strict';

/**
 * @ngdoc function
 * @name webappSrcApp.controller:ChartCtrl
 * @description
 * # ChartCtrl
 * Controller of the webappSrcApp
 */
angular.module('IoDApp')
  .controller('ChartCtrl', function ($scope, $http) {
    $scope.options = {
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
          axisLabel: 'Time (ms)',
          tickFormat: function (d) {
            return d3.time.format('%d-%b')(new Date(d));
          }
        },
        yAxis: {
          axisLabel: 'Voltage (v)',
          tickFormat: function (d) {
            return d3.format('.02f')(d);
          },
          axisLabelDistance: -10
        },
        callback: function (chart) {
          console.log("!!! lineChart callback !!!");
        }
      },
      title: {
        enable: true,
        text: 'Title for Line Chart'
      }
    };

    $scope.data = [];

    $http.get('/api/linechart/data').then(function (response) {
      console.log('success', response);
      $scope.data = response.data;
    }, function (response) {
      console.log('fail', response);
    });

  });
