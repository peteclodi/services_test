'use strict';

/**
 * @ngdoc overview
 * @name servicesTestApp
 * @description
 * # servicesTestApp
 *
 * Main module of the application.
 */
angular
  .module('servicesTestApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
