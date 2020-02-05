const path = require('path');
const fs = require('fs');

const verificar = (ruta) => {
  if (path.isAbsolute(ruta) === true) {
    return ruta;
  }
  return path.resolve(ruta);
};
const dirfile = (carpeta) => {
  if (fs.stats.isFile(carpeta) === true) {
    return true;
  }
  return false;
};

console.log(verificar('./mds/example/read.md'));
console.log(dirfile('./mds/example/read.md'));
module.exports = {
  verificar,
};
