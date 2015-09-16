'use strict';

/* App Module */
var app = angular.module('vpDev', ['ngRoute', 'ngProgress']);

app.run(['$rootScope', 'ngProgress', function ($rootScope, ngProgress) {

  ngProgress.color('#c6463d');

  $rootScope.$on("$routeChangeStart", function () {
    ngProgress.start();
  });

  $rootScope.$on("$routeChangeSuccess", function () {
    ngProgress.complete();
  });

}]);
