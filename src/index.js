const path = require('path');
const fs = require('fs');

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

const MD = (route) => {
  if (path.extname(route) === '.md') {
    return fs.readFileSync(route, 'utf8');
  }
};

// const readFile = fs.readFileSync('./mds/example/read.md', 'utf8');

// console.log(readFile);
console.log(archivo('./mds/example/read.md'));

console.log(MD('./mds/example/read.md'));
console.log(verificar('./mds/example/read.md'));
/* console.log(dirfile('./mds/example/read.md')); */
module.exports = {
  verificar,
};
