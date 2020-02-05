const path = require('path');
const fs = require('fs');
const pathNamrotee = process.argv[2];

const verificar = (ruta) => {
  if (path.isAbsolute(ruta) === true) {
    return ruta;
  }
  return path.resolve(ruta);
};
const archivo = (ruta) => {
  if (fs.statSync(ruta).isFile() === true) {
    return true;
  }
  return false;
};

const MD = route =>{
  if(path.extname(route) === '.md') {
    return true;
  }
};

const identifyFile = (route) => {
  const leer = fs.lstatSync(route);
  const archivo = leer.isFile();
  return archivo;
};
console.log(archivo('./mds/example/read.md'));
console.log(MD('./mds/example/read.md'));
console.log(verificar('./mds/example/read.md'));

module.exports = {
  verificar,
};
