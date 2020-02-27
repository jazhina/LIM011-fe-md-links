const valida = require('../src/index.js');

const mdlinks = (path, options) => {
  const Resp = new Promise((resolve) => {
    if (options.validate === true) {
      return resolve(valida.validarlink(path));
    }
    return resolve(valida.extraerlink(path));
  });
  return Resp;
};

// mdlinks('./mds/example/read.md', { validate: false })
//  .then((resolve) => {
//    console.log(resolve);
//  });

module.exports = mdlinks;

// const Resp = new Promise((resolve) => {
//   resolve(valida.extraerlink(path));
// });
// if (options.validate === true) {
//   return valida.validarlink(path);
// }
// return Resp;
