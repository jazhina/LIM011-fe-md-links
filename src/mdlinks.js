const valida = require('../src/index.js');

const mdlinks = (path, options) => {
  const Resp = new Promise((resolve) => {
    resolve(valida.extraerlink(path));
  });
  if (options === true) {
    return valida.validarlink(path);
  }
  return Resp;
};

mdlinks('./mds/example/read.md', true)
  .then((resolve) => {
    console.log(resolve);
  });
