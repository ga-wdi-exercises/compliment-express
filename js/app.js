"use strict";

(function() {
  angular
  .module("compliments", [
    "ui-router",
    "compliments"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  function RouterFunction($stateProvider){
    $stateProvider
    .state("complimentIndex"), {
      url: "/"
      controller: "ComplimentIndexController",
      controllerAs: "ComplimentIndexController"
      temmplateUrl: "/index.html"
    }
  }







});
