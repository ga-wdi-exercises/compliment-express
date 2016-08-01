"use strict";

(function(){
  angular
  .module("bleets")
  .factory("BleetFactory", [
    "$resource",
    BleetFactoryFunction
  ]);

  function BleetFactoryFunction($resource){
    return $resource( "http://localhost:3000/bleets/:id", {}, {
            update: { method: "PUT" }
        });
  }
})();
