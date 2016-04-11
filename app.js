'use strict'

angular.module('GDG_UW', ['ngRoute'], function($httpProvider) {
  // Use x-www-form-urlencoded Content-Type
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

  angular.module('GDG_UW')
    .config(['$routeProvider', function ($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(false);

      $routeProvider
        .when('/', {
          controller: 'homeCtrl',
          template: 'partials/home.html'
        })
        .when('/team', {
          controller: 'teamCtrl',
          template: 'partials/team.html'
        })
        .when('/events', {
          controller: 'eventsCtrl',
          template: 'partials/events.html'
        })
        .otherwise({
          redirectTo: '/'
        })
    }
  ]);

  angular.module('GDG_UW')
    .controller('homeCtrl', ['$scope',
      function ($scope) {

        }])
    .controller('teamCtrl', ['$scope', function ($scope) {

        }])
    .controller('eventsCtrl', ['$scope', function ($scope) {
        console.log("hi");
    }])
});
