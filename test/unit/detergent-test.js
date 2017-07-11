var expect = require('chai').expect;

var path = require('path');
var assert = require('assert');
var Detergent = require('../../lib/detergent');

describe("detergent", function() {
  it(`throws the correct error messages for each method`, function() {
    var testConfig = path.join(process.cwd(), './test-fixtures/config/good/.detergentrc');
    var expected = '🌊 foo: foo is bad ⛈ current count: 2; max allowed: 1\n' +
      '🌊 boo: boo is bad too ⛈ current count: 3; max allowed: 1\n';
    expect(() => Detergent.clean({
      configPath: testConfig,
      files: ['test-fixtures/bad']
    })).to.throw(expected);
  });

  it(`defaults to zero when allowed is not specified`, function() {
    var testConfig = path.join(process.cwd(), './test-fixtures/config/good/.default-detergentrc');
    expect(() => Detergent.clean({
      configPath: testConfig,
      files: ['test-fixtures/bad']
    })).to.throw('🌊 foo: foo is bad ⛈ current count: 2; max allowed: 0\n');
  });

  it(`defaults to empty string when message is not specified`, function() {
    var testConfig = path.join(process.cwd(), './test-fixtures/config/good/.default-message-detergentrc');
    expect(() => Detergent.clean({
      configPath: testConfig,
      files: ['test-fixtures/bad']
    })).to.throw('🌊 foo:  ⛈ current count: 2; max allowed: 1\n');
  });

  it(`shows the correct message when count is lower than limit`, function() {
    var testConfig = path.join(process.cwd(), './test-fixtures/config/good/.lower-detergentrc');
    expect(() => Detergent.clean({
      configPath: testConfig,
      files: ['test-fixtures/bad']
    })).to.throw("🌊 htmlSafe: 👍 Thanks for removing a `htmlSafe`. Please update the `allowedCount` to 2 in `.detergentrc`");
  });
});
