(function () {
  'use strict';
  
  function MyCtrl2($scope) {
    $scope.testMessage = "Testing 1 2 3 at " + (new Date());
  }	
  
  module.exports = MyCtrl2;
})();
