const core = require('@actions/core');
const github = require('@actions/github');

const fs = require('fs');

const getInsertIndex = (index, len) => {
  return (index < 0) ? len + index + 1 : index;
} 

try {
  const file = core.getInput('file');
  const index = parseInt(core.getInput('index'), 10);
  const item = core.getInput('item');

  const data = fs.readFileSync(file, 'utf8');
  const jsonData = JSON.parse(data);

  const start = getInsertIndex(index, jsonData.length);
  console.log("Splicing at " + start)
  console.log(jsonData.length)
  jsonData.splice(start, 0, JSON.parse(item));

  fs.writeFileSync(file, JSON.stringify(jsonData, null, 2));
} catch (error) {
  core.setFailed(error.message);
}
