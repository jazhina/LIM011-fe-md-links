const mdlink = require('../src/mdlinks.js');
// const stats = require('../src/stats.js');


const clioptions = (path, options) => {
  let resp = '';
  if (options === '--validate') {
    resp = mdlink.mdLinks(path, { validate: true })
      .then((res) => mdlink.validarlink(res));
  }
  return resp;
};

// clioptions('./mds/example/read.md', '--validate');
module.exports = clioptions;
