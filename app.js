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

myApp.controller('commonCtrl', ['$scope','$location', function ($scope, $location) {

  $scope.selection = ['active', '', ''];

  var currentLocation = $location.path();

  if(currentLocation == '/team') {
    $scope.selection = ['', 'active', ''];
  }

  if(currentLocation == '/events') {
    $scope.selection = ['', '', 'active'];
  }

  $scope.changeView = function (viewIndex) {
    switch (viewIndex) {
      case 0:
        $scope.selection = ['active', '', ''];
        $location.path('/');
        break;
      case 1:
        $scope.selection = ['', 'active', ''];
        $location.path('/team');
        break;
      case 2:
        $scope.selection = ['', '', 'active'];
        $location.path('/events');
        break;
      default:
        console.log('Error page does not exist');
    }
  }
}])

myApp.controller('homeCtrl', ['$scope', function ($scope) {

}])
myApp.controller('teamCtrl', ['$scope', function ($scope) {

}])
myApp.controller('eventsCtrl', ['$scope','$location', function ($scope, $location) {
  $scope.eventList = [
    {
      month : 'July',
      day : '09',
      events: [
        {
          name : 'Prod Hacks',
          image : './img/events/prodhacks.png',
          url : 'https://www.facebook.com/events/501109840081880/'
        },
        {
          name : 'Cisco DevNet',
          image : './img/events/devnet.png',
          url : 'https://www.facebook.com/events/501109840081880/'
        }
      ]
    },
    {
      month : 'April',
      day : '25',
      events: [
        {
          name : 'Prod Hacks',
          image : './img/events/prodhacks.png',
          url : 'https://www.facebook.com/events/501109840081880/'
        },
        {
          name : 'Prod Hacks',
          image : './img/events/prodhacks.png',
          url : 'https://www.facebook.com/events/501109840081880/'
        },
        {
          name : 'Cisco DevNet',
          image : './img/events/devnet.png',
          url : 'https://www.facebook.com/events/501109840081880/'
        }
      ]
    }
  ];

}])
