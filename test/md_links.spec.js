const objfns = require('../src/index.js');

/* fetchMock.mock('*', 200);
const res = await fetch('http://example.com');
assert(res.ok);
fetchMock.restore(); */

describe('TRAER RUTA ABSOLUTA', () => {
  it('Convertir la ruta  absoluta', () => {
    expect(objfns.verificar('./mds/example/read.md')).toBe('/home/jazmin/Desktop/Nuevo/LIM011-fe-md-links/mds/example/read.md');
  });
  it('Verificar que la ruta sea absoluta', () => {
    expect(objfns.verificar('/home/jazmin/Desktop/Nuevo/LIM011-fe-md-links/mds/example')).toBe('/home/jazmin/Desktop/Nuevo/LIM011-fe-md-links/mds/example');
  });
});
describe('REVISAR SI ES ARCHIVO O DIRECTORIO', () => {
  it('SI ES UN ARCHIVO REGRESA VERDADERO', () => {
    expect(objfns.archivo('./mds/example/read.md')).toBe(true);
  });
  it('SI ES UN DIRECTORIO REGRESA FALSO', () => {
    expect(objfns.archivo('./mds/example')).toBe(false);
  });
});
describe('REVISAR SI ES UN ARCHIVO MD', () => {
  it('ES UN ARCHIVO MD', () => {
    expect(objfns.MD('./mds/example/read.md')).toBe(true);
  });
  it('NO ES UN ARCHIVO MD', () => {
    expect(objfns.MD('./mds/example/index.html')).toBe(false);
  });
});
const respMD = ['/home/jazmin/Desktop/Nuevo/LIM011-fe-md-links/mds/example/documento.md',
  '/home/jazmin/Desktop/Nuevo/LIM011-fe-md-links/mds/example/read.md',
  '/home/jazmin/Desktop/Nuevo/LIM011-fe-md-links/mds/example/test/example.md',
  '/home/jazmin/Desktop/Nuevo/LIM011-fe-md-links/mds/example/test/informes/info.md'];

describe('ARCHIVO GUARDA ARCHIVOS MD', () => {
  it('ES UN ARCHIVO MD', (done) => {
    expect(objfns.guardarArchivosMD('./mds/example')).toEqual(respMD);
    done();
  });
});

const ltr = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: '/home/jazmin/Desktop/Nuevo/LIM011-fe-md-links/mds/example/read.md',
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch',
    text: 'FETCH',
    file: '/home/jazmin/Desktop/Nuevo/LIM011-fe-md-links/mds/example/read.md',
  },
];
describe('EXTRAER LINK, RUTA, TEXTO', () => {
  it('EXTRAER LINK, RUTA, TEXTO', (done) => {
    expect(objfns.extraerlink('./mds/example/read.md')).toEqual(ltr);
    done();
  });
});
const valida = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: '/home/jazmin/Desktop/Nuevo/LIM011-fe-md-links/mds/example/read.md',
    status: 200,
    message: 'OK',
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch',
    text: 'FETCH',
    file: '/home/jazmin/Desktop/Nuevo/LIM011-fe-md-links/mds/example/read.md',
    status: 200,
    message: 'OK',
  },
];
describe('VALIDAR LINK', () => {
  it('VALIDAR LINK', (done) => {
    expect(objfns.validarlink('./mds/example/read.md')).toEqual(valida);
    done();
  });
});
