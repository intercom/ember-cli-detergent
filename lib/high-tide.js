
module.exports = {
  process: function(opts) {
    var config = loadConfig(opts);
    setupLinter(config);
    var engine = createEngine();
    var res = engine.executeOnFiles(opts.files);
    console.log(res)
  }
};

function loadConfig(opts) {
  var path = require('path');
  var configPath = opts.configPath || path.join(process.cwd(), '.high-tiderc');
  return require(configPath);
}

function setupLinter(config) {
  var linter = require("eslint").linter;

  var blacklistedMethodNames = config.js.map(function(rule) {
    return rule.methodName;
  })

  linter.defineRule('disallowMethods', function(context) {
    return {
        "CallExpression": function(node) {
          blacklistedMethodNames.forEach(function(disallowedMethod) {
            var callee = node.callee;
            if (callee.property) {
                if (callee.property.name === disallowedMethod) {
                    context.report(node, disallowedMethod + " has been blacklisted and its usage is disallowed.");
                }
            }
          });
        }
    };
  });
}

function createEngine() {
  var CLIEngine = require("eslint").CLIEngine;
  var config = {
    useEslintrc: false,
    rules: {
      'disallowMethods': 2
    }
  }
  return new CLIEngine(config);
}
