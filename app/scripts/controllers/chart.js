'use strict';

/**
 * @ngdoc function
 * @name webappSrcApp.controller:ChartCtrl
 * @description
 * # ChartCtrl
 * Controller of the webappSrcApp
 */
angular.module('IoDApp')
  .controller('ChartCtrl', function ($scope, $http, chartConfig) {
    $scope.options = chartConfig.temperatureConfig("Indor Temperature");
    $scope.data = [];

    $http.get('/api/linechart/data').then(function (response) {
      $scope.data = response.data;
    });

  });
