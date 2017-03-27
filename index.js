/* jshint node: true */
/* eslint-env node */
'use strict';

let HighTide = require('./lib/high-tide');

module.exports = {
  name: 'ember-cli-high-tide',

  postBuild(result) {
    HighTide.process({ files: ['app']});
  }
};
