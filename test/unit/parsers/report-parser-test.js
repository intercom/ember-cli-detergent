var assert = require('chai').assert;
var path = require('path');

var ReportParser = require('../../../lib/parsers/report-parser');

describe("report parser", function() {
  it(`returns the number of errors correctly`, function() {
    var report = require(path.join(process.cwd(), './test-fixtures/report/report'));
    var expected = { foo: 2, boo: 3 }
    assert.equal(JSON.stringify(expected), JSON.stringify(ReportParser.parseReport(report)));
  });
});
