const path = require('path');
const fs = require('fs');
const marked = require('marked');

// Regresa una ruta absoluta
const verificar = (ruta) => {
  if (path.isAbsolute(ruta) === true) {
    return ruta;
  }
  return path.resolve(ruta);
};

// Verifica si es un archivo
const archivo = (ruta) => fs.statSync(ruta).isFile();

// Trae la informacion en caso sea un archivo MD
const MD = (route) => path.extname(route) === '.md';

// Guardar archivos MD en un arreglo
const guardarArchivosMD = (route) => {
  let contenedor = [];
  const nuevaRuta = verificar(route);
  if (archivo(nuevaRuta)) {
    if (MD(nuevaRuta)) {
    // console.log(nuevaRuta);
      contenedor.push(nuevaRuta);
    }
  } else {
    const data = fs.readdirSync(nuevaRuta);
    data.forEach((element) => {
      const file = guardarArchivosMD(path.join(nuevaRuta, element));
      contenedor = contenedor.concat(file);
    });
  }
  return contenedor;
};
const readFile = (route) => fs.readFileSync(route, 'utf-8');

const extraerlink = (route) => {
  const lib = new marked.Renderer();
  const array = [];
  const data = guardarArchivosMD(route);
  data.forEach((File) => {
    const contenido = readFile(File);
    lib.link = (Href, title, Text) => {
      array.push({ href: Href, text: Text, file: File });
    };
    marked(contenido, { renderer: lib });
  });
  return array;
};
// const readFile = fs.readFileSync('./mds/example/read.md', 'utf8');
// console.log(readFile);
// console.log(archivo('./mds/example/read.md'));
console.log(guardarArchivosMD('./mds/example'));
console.log(extraerlink('./mds/example'));
// console.log(MD('./mds/example/read.md'));
// console.log(verificar('./mds/example/read.md'));

module.exports = {
  verificar,
};
