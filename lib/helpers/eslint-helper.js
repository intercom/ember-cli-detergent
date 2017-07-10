var path = require('path');

function createEngine() {
  var CLIEngine = require("eslint").CLIEngine;
  var config = {
    useEslintrc: false,
    rules: {
      'disallowMethods': 2
    },
    parser: "babel-eslint",
    cache: true,
    cacheLocation: path.join(process.cwd(), '.eslintcache')
  }
  engine = new CLIEngine(config);
  return engine;
}

function setupLinter(config) {
  var linter = require("eslint").linter;
  var blacklistedMethodNames = Object.keys(config.methods);
  linter.defineRule('disallowMethods', function(context) {
    return {
        "CallExpression": function(node) {
          blacklistedMethodNames.forEach(function(disallowedMethod) {
            var callee = node.callee;
            if (callee.property) {
                if (callee.property.name === disallowedMethod) {
                    context.report(node, disallowedMethod);
                }
            }
          });
        }
    };
  });
}

function runLinter(config, opts) {
  setupLinter(config);
  var engine = createEngine();
  var report = engine.executeOnFiles(opts.files);
  return report.results;
}

module.exports = {
  runLinter: runLinter
}
