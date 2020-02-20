const mdlinks = require('../src/mdlinks.js');
const stats = require('../src/stats.js');

const clioptions = (path, options) => {
  let resp = '';
  if (path) {
    resp = mdlinks(path, { validate: false })
      .then((res) => {
        let string = '';
        res.forEach((element) => {
          string += `\n Ruta: ${element.file}\n Link: ${element.href}\n Texto: ${element.text}\n`;
        });
        return string;
      });
  }
  if (options === '--validate') {
    resp = mdlinks(path, { validate: true })
      .then((res) => {
        let string = '';
        res.forEach((element) => {
          string += `\n File: ${element.file}\n Href: ${element.href}\n Status: ${element.status}\n Mensaje: ${element.message}\n texto: ${element.text}\n`;
        });
        return string;
      });
  }
  if (options === '--stats') {
    resp = stats(path, false)
      .then((res) => {
        const string = ` Total: ${res.Total}\n Unique: ${res.Unique}`;
        return string;
      });
  }
  if (options === '--stats --validate') {
    resp = stats(path, true)
      .then((res) => {
        const string = ` Total: ${res.Total}\n Unique: ${res.Unique}\n Broken: ${res.Broken}`;
        return string;
      });
  }
  return resp;
};

/* clioptions('./mds/example/read.md', '--stats')

  .then((res) => {
    console.log(res);
  }); */
/* clioptions('./mds/example/read.md', '--validate')
  .then((res) => {
    console.log(res);
  });
clioptions('./mds/example/read.md', '--stats --validate')
  .then((res) => {
    console.log(res);
  });
clioptions('./mds/example/read.md')
  .then((res) => {
    console.log(res);
  }); */
module.exports = clioptions;
