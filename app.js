"use strict";

(function(){
  angular
  .module("compliments", [
    "ui-router"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    RouterFunction
  ])

  function RouterFunction($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("complimentIndex"), {
      url: "/",
      controller: "ComplimentsController",
      controllerAs: "vm",
      temmplateUrl: "./views/compliment.html"
    }
  }
  // function RouterFunction($routeProvider, $locationProvider){
  //   when('/', {
  //     templateUrl: "views/compliment.html",
  //     controller: 'ComplimentsController',
  //     controllerAs: "vm"
  //   }).
  // }
})();
