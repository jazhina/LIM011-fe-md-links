const mdlinks = require('../src/mdlinks.js');
const stats = require('../src/stats.js');

const clioptions = (path, options, option2) => {
  let resp = '';
  if (options === '--stats' && option2 === '--validate') {
    resp = stats(path, true)
      .then((res) => {
        const string = ` Total: ${res.Total}\n Unique: ${res.Unique}\n Broken: ${res.Broken}`;
        return string;
      });
  } else if (options === '--stats') {
    resp = stats(path, false)
      .then((res) => {
        const string = ` Total: ${res.Total}\n Unique: ${res.Unique}`;
        return string;
      });
  } else if (options === '--validate') {
    resp = mdlinks(path, { validate: true })
      .then((res) => {
        let string = '';
        res.forEach((element) => {
          string += `\n Ruta: ${element.file}\n Link: ${element.href}\n Texto: ${element.text}\n Estado: ${element.status}\n Mensaje: ${element.message}\n`;
        });
        return string;
      });
  } else if (path) {
    resp = mdlinks(path, { validate: false })
      .then((res) => {
        let string = '';
        res.forEach((element) => {
          string += `\n Ruta: ${element.file}\n Link: ${element.href}\n Texto: ${element.text}\n`;
        });
        return string;
      });
  } else {
    resp = new Promise((resolve) => resolve('Ingrese una ruta '));
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
