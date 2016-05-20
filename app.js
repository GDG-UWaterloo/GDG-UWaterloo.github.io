'use strict'

var myApp = angular.module('GDG_UW', ['ngRoute'], function ($locationProvider) {
  // Removes hash in url but cannot be used with Github Pages
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
  $(document).ready(function(){
    $('.parallax').parallax();
  });

  $scope.posts = [
    {
      photo : './img/home/google-image.png',
      caption : 'AdMob Student App Challenge',
      summary : 'Win an all expense paid trip to San Francisco and tour the Googleplex ...'
    },
    {
      photo : './img/home/google-image.png',
      caption : 'Helping students build better apps',
      summary : 'One million developers around the world have made a commitment to learn a new language ...'
    },
    {
      photo : './img/home/google-image.png',
      caption : 'Spatial audio comes to Cardboard SDK',
      summary : 'We built today’s updates with performance in mind, so adding spatial audio to your app has minimal impact on the primary CPU ...'
    },
    {
      photo : './img/home/google-image.png',
      caption : 'Get your app featured in Project Tango',
      summary : 'Lenovo announced the development of the first consumer-ready smartphone with Project Tango.'
    }
  ];
}])

myApp.controller('teamCtrl', ['$scope', function ($scope) {
  $scope.team = [
    {
      name : 'Allan',
      photo : 'img/team/Allan.png'
    }
  ];

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
        },
        {
          name : 'Pavel hacks',
          image : './img/team/Pavel.png',
          url : 'https://google.com/search?q=pavel'
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
