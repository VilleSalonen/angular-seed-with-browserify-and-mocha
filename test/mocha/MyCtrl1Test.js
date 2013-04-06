var assert = require("assert")
var MyCtrl1 = require("/Users/thardas/Programming/angular-browserify/app/js/controllers/MyCtrl1.js")

describe('MyCtrl1', function(){
  var $scope = {};
  var ctrl = new MyCtrl1($scope);

  it('coolest decade', function(){
    assert.equal($scope.coolestDecade, "80s");
  })
  
  it('names should contain kickass people named John', function(){
    assert.deepEqual($scope.names, ["John McClane", "John Matrix", "John Rambo", "John Connor"]);
  })
})