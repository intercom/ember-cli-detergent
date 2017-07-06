function parseReport(report) {
  var errors = {};
  report.forEach(function(res) {
    if (res.errorCount !== 0) {
      var messages = res.messages;
      for (var i = 0, len = messages.length; i < len; i++) {
        errors[messages[i].message] = (errors[messages[i].message] || 0) + 1;
      }
    }
  });
  return errors;
}

module.exports= {
  parseReport: parseReport
};
