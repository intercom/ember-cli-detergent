
let ConfigParser = require('./parsers/config-parser');
let ESLintHelper = require('./helpers/eslint-helper');
let ReportParser = require('./parsers/report-parser');

function expose(methods, results) {
  var error = "";
  for (var method in results) {
    var occurance = results[method];
    var allowed = (typeof methods[method].allowed === 'undefined') ? 0 : methods[method].allowed;
    var message = (typeof methods[method].message === 'undefined') ? "" : methods[method].message;
    if (occurance > allowed) {
      error += "🔮 " + method + ": " + message + " ⛈ current count: " + occurance + "; max allowed: "+ allowed + "\n";
    }
    if (occurance < allowed) {
      error += "🔮 " + method + ": " + message + " ✨ current count: " + occurance + "; allowed: "+ allowed + "; don't forget to update the count in .detergentrc\n";
    }
  }
  if (error !== "") {
    throw error;
  }
}
module.exports = {
  clean: function(opts) {
    var config = ConfigParser.loadConfig(opts);
    var report = ESLintHelper.runLinter(config, opts);
    var results = ReportParser.parseReport(report, config);
    if (results !== {}) {
      expose(config.methods, results);
    }
  }
};
