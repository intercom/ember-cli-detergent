var path = require('path');
var assert = require('assert');
var HighTide = require('../../lib/high-tide');

describe("high-tide", function() {
  it(`works`, function() {
    var testConfig = path.join(process.cwd(), './test/.high-tiderc');
    HighTide.process({
      configPath: testConfig,
      files: ['test-fixtures/bad']
    });
    assert.ok(true);
  });
});