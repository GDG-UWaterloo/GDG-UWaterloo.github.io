(function () {
  'use strict';

  angular.module('GDG_UW', ['ngRoute'], function($httpProvider) {
  // Use x-www-form-urlencoded Content-Type
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

  angular.module('GDG_UW')
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          controller: 'homeCtrl',
          templateUrl: 'partials/home.html'
          css: 'css/home.css'
        })
        .when('/team', {
          controller: 'teamCtrl',
          templateUrl: 'partials/team.html'
          css: 'css/team.css'
        })
        .when('/events', {
          controller: 'eventsCtrl',
          templateUrl: 'partials/events.html'
          css: 'css/events.css'
        })
        .other('*');
        css: 'css/other.css'
        }]);

  angular.module('GDG_UW')
    .controller('homeCtrl', ['$scope',
      function ($scope) {

        }])
    .controller('teamCtrl', ['$scope', function ($scope) {

        }])
    .controller('eventsCtrl', ['$scope', function ($scope) {

        }])

}());
