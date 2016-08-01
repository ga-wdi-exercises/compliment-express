`use strict`;

(function(){
  angular
  .module("compliments")
  .controller("ComplimentsController", [
    ComplimentsController
  ]);

  function ComplimentsController(){
    var vm = this;
    var compNum = data[Math.floor(Math.random() * data.length)];
    console.log(compNum);
    var compDisplay = data[compNum];
  }

}());

app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Top Sellers in Books';
}]);
