const path = require('path');

const verificar = (ruta) => {
  if (path.isAbsolute(ruta) === true) {
    return ruta;
  }
  return path.resolve(ruta);
};

console.log(verificar('./mds/example/read.md'));

module.exports = {
  verificar,
};
