/* jshint node: true */
/* eslint-env node */
'use strict';

let HtmlSafeChecker = require('./lib/html-safe-checker');

module.exports = {
  name: 'ember-cli-high-tide',

  postBuild(result) {
    HtmlSafeChecker.verify();
  }
};
