'use strict';

/**
 * @ngdoc function
 * @name servicesTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the servicesTestApp
 */
angular.module('servicesTestApp')
    .controller('MainCtrl', function ($scope, SearchAllBooks) {
        $scope.allBooks = [];
        $scope.criteria = '';

        $scope.search = function () {
            $scope.allBooks = SearchAllBooks.get({keyword: $scope.criteria}, function (results) {
                console.log(results);
            });
        };
    });
