/* eslint-env node */
var logger = console;

var errorMessage =
  '\nember-cli-detergent accepts a `methods` object with one or more <methodName> children.\n' +
  '  * <methodName> - object - Containing the following `optional` values:\n' +
  '    * `allowed` - integer - number of allowed occurances of the blacklisted method. Defaults to `0`\n' +
  '    * `message` - string -  a message to display on error. Defaults to `empty string`';

function isValidConfigObjectFormat(config) {
  checkMethodsExist(config);
  checkMethodsIsNotEmpty(config);
}

function checkMethodsExist(config){
  if (!config.methods) {
    throw new Error(errorMessage);
  }
}
function checkMethodsIsNotEmpty(config){
  var methods = Object.keys(config.methods);
  if (methods.length == 0) {
    throw new Error(errorMessage);
  }
}

module.exports = {
  loadConfig: function(opts) {
    var path = require('path');
    var configPath = opts.configPath || path.join(process.cwd(), '.detergentrc');
    isValidConfigObjectFormat(require(configPath));
    return require(configPath);
  },
  errorMessage: errorMessage
};
