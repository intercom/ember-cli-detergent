
let ConfigParser = require('./parsers/config-parser');
let ESLintHelper = require('./helpers/eslint-helper');
let ReportParser = require('./parsers/report-parser');

function expose(methods, results) {
  var error = "";
  for (var method in results) {
    var occurance = results[method];
    var allowedCount = (typeof methods[method].allowedCount === 'undefined') ? 0 : methods[method].allowedCount;
    var message = (typeof methods[method].message === 'undefined') ? "" : methods[method].message;
    if (occurance > allowedCount) {
      error += "🔮 " + method + ": " + message + " ⛈ current count: " + occurance + "; max allowed: "+ allowedCount + "\n";
    }
    if (occurance < allowedCount) {
      var belowCountMessage = "👍 Thanks for removing a `" + method + "`. Please update the `allowedCount` to " + occurance + " in `.detergentrc`";
      error += "🔮 " + method + ": " + belowCountMessage;
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
