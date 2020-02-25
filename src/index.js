const path = require('path');
const fs = require('fs');
const marked = require('marked');
const fetch = require('node-fetch');

// Regresa una ruta absoluta
const verificar = (ruta) => {
  if (path.isAbsolute(ruta) === true) {
    return ruta;
  }
  return path.resolve(ruta);
};

// Verifica si es un archivo
const archivo = (ruta) => fs.statSync(ruta).isFile();

// Archivo MD
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

// LEE EL ARCHIVO
const readFile = (route) => fs.readFileSync(route, 'utf-8');
// EXTRAE EL LINK,TEXTO Y RUTA
const extraerlink = (route) => {
  const lib = new marked.Renderer();
  const array = [];
  const data = guardarArchivosMD(route);
  data.forEach((File) => {
    const contenido = readFile(File);
    lib.link = (Href, title, Text) => {
      array.push({
        href: Href,
        text: Text,
        file: File,
      });
    };
    marked(contenido, { renderer: lib });
  });
  return array;
};

// VALIDA LOS LINKS Y RETORNA SI SON VALIDOS MENSAJE OK Y FAIL
const validarlink = (route) => {
  const data = extraerlink(route);
  const promesa = [];
  data.forEach((e) => {
    promesa.push(
      fetch(e.href)
        .then((r) => {
          let mensaje;
          if (r.status >= 200 && r.status < 400) {
            mensaje = 'OK';
          } else {
            mensaje = 'FAIL';
          }
          const obj = {
            href: e.href,
            text: e.text,
            file: e.file,
            status: r.status,
            message: mensaje,
          };
          return obj;
        })
        .catch((error) => console.log('Hubo un error', error)),
    );
  });
  return Promise.all(promesa);
};

// const readFile = fs.readFileSync('./mds/example/read.md', 'utf8');
// console.log(readFile('./mds/example/read.md'));
// console.log(archivo('./mds/example/read.md'));

// console.log(guardarArchivosMD('./mds/example'));
// console.log(extraerlink('./mds/example'));
// console.log(MD('./mds/example/read.md'));
// console.log(verificar('./mds/example/read.md'));

/* validarlink('./mds/example/read.md')
  .then((resp) => {
    console.log(resp);
  }); */

module.exports = {
  verificar,
  archivo,
  MD,
  guardarArchivosMD,
  readFile,
  extraerlink,
  validarlink,
};
