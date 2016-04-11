angular.module('GDG_UW', ['ngRoute'], function($httpProvider) {
  // Use x-www-form-urlencoded Content-Type
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

  angular.module('GDG_UW')
    .config(['$routeProvider', function ($routeProvider) {
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
        .other('*');
        }]);

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
