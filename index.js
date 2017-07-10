/* jshint node: true */
/* eslint-env node */
'use strict';

let Detergent = require('./lib/detergent');

module.exports = {
  name: 'ember-cli-detergent',

  postBuild(result) {
    Detergent.clean({ files: ['app', 'lib']});
  }
};
