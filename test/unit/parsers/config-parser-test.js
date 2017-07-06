var assert = require('chai').assert;
var expect = require('chai').expect;
var path = require('path');

var ConfigParser = require('../../../lib/parsers/config-parser');

describe("config parser", function() {
  it(`throws an error when empty config`, function() {
    var testConfig = path.join(process.cwd(), './test-fixtures/config/bad/.empty-seerrc');
    expect(() => ConfigParser.loadConfig({
      configPath: testConfig,
      files: ['test-fixtures/bad']
    })).to.throw(ConfigParser.errorMessage);
  });

  it(`throws an error when no blacklisted methods specified`, function() {
    var testConfig = path.join(process.cwd(), './test-fixtures/config/bad/.no-methods-seerrc');
    expect(() => ConfigParser.loadConfig({
      configPath: testConfig,
      files: ['test-fixtures/bad']
    })).to.throw(ConfigParser.errorMessage);
  });

  it(`returns the config`, function() {
    var testConfig = path.join(process.cwd(), './test-fixtures/config/good/.seerrc');
    var expected = {
      methods: {
       'foo': {
          allowed: 1,
          message: "foo is bad"
        },
        'boo': {
          allowed: 1,
          message: "boo is bad too"
        }
      }
    };
    assert.equal(JSON.stringify(expected), JSON.stringify(ConfigParser.loadConfig({ configPath: testConfig })));
  });
});
