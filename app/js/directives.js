'use strict';

/* Directives */

var angular = require('./../lib/angular.shim.js')

angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
