'use strict';

/**
 * @ngdoc function
 * @name servicesTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the servicesTestApp
 */
angular.module('servicesTestApp')
    .factory('SearchAllBooks', function ($resource) {
        return new $resource('http://search.packback.co/api/search/:keyword', {keyword: '@keyword'});
    });
