const valida = require('../src/index.js');

const mdlinks = (path, options) => {
  const Resp = new Promise((resolve) => {
    resolve(valida.extraerlink(path));
  });
  if (options.validate === true) {
    return valida.validarlink(path);
  }
  return Resp;
};

/* mdlinks('./mds/example/read.md', { validate: true })
  .then((resolve) => {
    console.log(resolve);
  }); */

module.exports = mdlinks;
/* const Resp = new Promise((resolve, reject) => {
  if (options.validate === true) {
    return resolve(valida.validarlink(path));
  } else {
    return reject((error) => console.log(error)),
  }
});
return Resp; */
