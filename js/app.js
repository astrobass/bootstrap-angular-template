var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
  
  $stateProvider
    .state('home', {
      url: '/home',
      controller: 'homeController',
      templateUrl: 'partials/home.html'
    })
    .state('view', {
      url: '/view',
      controller: 'viewController',
      templateUrl: 'partials/view.html'
    })
    .state('http', {
      url: '/http',
      controller: 'httpController',
      templateUrl: 'partials/http.html'
    })
});