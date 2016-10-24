# angular-seed-with-browserify-and-mocha — the seed for AngularJS apps with Browserify and Mocha

**DEPRECATED**

For basic information about AngularJS and angular-seed, see https://github.com/angular/angular-seed.

This project is a fork of the original with added support for requiring modules with Browserify and
testing controllers (and other implementations) with Mocha.

After you have changed your JavaScript files, you have to update Browserify bundle:

    browserify app/js/app.js -o app/js/bundle.js

Mocha tests can be executed with command:

    mocha test/mocha/
