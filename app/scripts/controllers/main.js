'use strict';

angular.module('metroPerkApp')
  .controller('MainCtrl', function ($scope) {
    $scope.salary = 1000;
    $scope.rate = 0.25;
    $scope.pass = 75;

    $scope.csalary = $scope.salary;
    $scope.crate = $scope.rate * 100;

    $scope.update = function() {
      $scope.salary = parseInt( $scope.csalary, 10 );
      $scope.rate = parseInt( $scope.crate, 10 ) / 100;
      $scope.gross = $scope.salary - $scope.pass;
      $scope.tax = $scope.gross * $scope.rate;
      $scope.ntax = $scope.salary * $scope.rate;
      $scope.net = $scope.gross - $scope.tax;
      $scope.nnet = $scope.salary - $scope.ntax - $scope.pass;
      $scope.savings = $scope.net - $scope.nnet;
      $scope.actual = $scope.pass - $scope.savings;
      $('#myModal').modal('hide');
    };

    $scope.update();
  });
