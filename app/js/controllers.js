'use strict';

var angular = require('./../lib/angular.shim.js')

var MyCtrl1 = require("./controllers/MyCtrl1.js");
angular.module("myApp.controllers", []).controller("MyCtrl1", [MyCtrl1]);

var MyCtrl2 = require("./controllers/MyCtrl2.js");
angular.module("myApp.controllers", []).controller("MyCtrl2", ["$scope", MyCtrl2]);
