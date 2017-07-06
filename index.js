/* jshint node: true */
/* eslint-env node */
'use strict';

let Seer = require('./lib/seer');

module.exports = {
  name: 'ember-cli-seer',

  postBuild(result) {
    Seer.track({ files: ['app', 'lib']});
  }
};
