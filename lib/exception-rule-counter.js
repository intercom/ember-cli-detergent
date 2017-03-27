/* eslint-env node */

let exceptionRuleCounter = function(folder, nameArgs, regexp) {
  let exec = require('child_process');
  let command = `find ${folder} -type f ${nameArgs} | xargs grep ${regexp} | wc -l`;
  return parseInt(exec.execSync(command).toString().trim());
};

module.exports = exceptionRuleCounter;
