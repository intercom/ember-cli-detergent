/* eslint-env node */

let ESLintCLIEngine = function(config, filesArray) {
  var CLIEngine = require("eslint").CLIEngine;
  var cli = new CLIEngine(config);
  var report = cli.executeOnFiles(filesArray);
  return report;
};

module.exports = ESLintCLIEngine;
