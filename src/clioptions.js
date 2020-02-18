const mdlinks = require('../src/mdlinks.js');
const stats = require('../src/stats.js');

const clioptions = (path, options) => {
  let resp = '';
  if (options === '--validate') {
    resp = mdlinks(path, { validate: true });
    // .then((res) => mdlinks(res));
  }
  if (options === '--stats') {
    resp = stats(path, true);
  }
  if (options === '--stats --validate') {
    resp = stats(path, true);
  }
  return resp;
};

clioptions('./mds/example/read.md', '--stats')
  .then((res) => {
    console.log(res);
  });
clioptions('./mds/example/read.md', '--validate')
  .then((res) => {
    console.log(res);
  });
clioptions('./mds/example/read.md', '--stats --validate')
  .then((res) => {
    console.log(res);
  });
module.exports = clioptions;
