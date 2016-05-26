'use strict';

/**
 * @ngdoc function
 * @name webappSrcApp.controller:ChartCtrl
 * @description
 * # ChartCtrl
 * Controller of the webappSrcApp
 */
angular.module('webappSrcApp')
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
          tickFormat: function(d){
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

    $http.get('/data').then(function (response) {
      console.log('success', response);
    }, function (response) {
      console.log('fail', response);
    });

    $scope.data = sinAndCos();

    /*Random Data Generator */
    function sinAndCos() {
      var sin = [], sin2 = [],
        cos = [];

      //Data is represented as an array of {x,y} pairs.
      for (var i = 0; i < 100; i++) {
        sin.push({x: i, y: Math.sin(i / 10)});
        sin2.push({x: i, y: i % 10 == 5 ? null : Math.sin(i / 10) * 0.25 + 0.5});
        cos.push({x: i, y: .5 * Math.cos(i / 10 + 2) + Math.random() / 10});
      }


      console.log(sin);
      //Line chart data should be sent as an array of series objects.
      return [{
        values: cos,
        key: 'Cosine Wave',
        color: '#2ca02c'
      }
      ];
    };

  });
