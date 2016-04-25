'use strict'

var myApp = angular.module('GDG_UW', ['ngRoute'], function ($locationProvider) {
  // // Removes hash in url but cannot be used with Github Pages
  // $locationProvider.html5Mode(true);
});

myApp.config(['$routeProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        controller: 'homeCtrl',
        templateUrl: 'partials/home.html'
      })
      .when('/team', {
        controller: 'teamCtrl',
        templateUrl: 'partials/team.html'
      })
      .when('/events', {
        controller: 'eventsCtrl',
        templateUrl: 'partials/events.html'
      })
      .otherwise({
        redirectTo: '/'
      })
  }
]);

myApp.controller('homeCtrl', ['$scope', function ($scope) {

}])
myApp.controller('teamCtrl', ['$scope', function ($scope) {

}])
myApp.controller('eventsCtrl', ['$scope','$location', function ($scope, $location) {

}])
