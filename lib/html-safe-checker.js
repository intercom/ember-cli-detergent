/* eslint-env node */

let HtmlSafeRule = require('../config/html-safe');
let ESLintCLIEngine = require('./eslint-cli-engine');

module.exports = {
  verify: function() {
    let report = ESLintCLIEngine(HtmlSafeRule.config, HtmlSafeRule.files);
    let errorCount = report.errorCount;
    if ( errorCount > HtmlSafeRule.errorLimit ) {
      throw `FAILED - There should be exactly ${HtmlSafeRule.errorLimit} usages in total of "Em.String.htmlSafe" or "Computed.htmlSafe" (there are currently ${errorCount} uses).
      \nPlease see: https://github.com/intercom/embercom/wiki/Avoiding-XSS-in-Embercom`;
    }
    if ( errorCount < HtmlSafeRule.errorLimit ) {
      throw `WARNING - Good job on lowering htmlSafe usages!
     \nPlease update errorLimit to ${errorCount} in lib/interlint/config/html-safe.js`;
    }
  }
};
