const objfns = require('../src/index.js');

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

describe('ARCHIVO GUARDA ARCHIVOS MD', () => {
  it('ES UN ARCHIVO MD', () => {
    const respMD = ['/home/jazmin/Desktop/Nuevo/LIM011-fe-md-links/mds/example/documento.md',
      '/home/jazmin/Desktop/Nuevo/LIM011-fe-md-links/mds/example/read.md',
      '/home/jazmin/Desktop/Nuevo/LIM011-fe-md-links/mds/example/test/example.md',
      '/home/jazmin/Desktop/Nuevo/LIM011-fe-md-links/mds/example/test/informes/info.md'];
    expect(objfns.guardarArchivosMD('./mds/example/read.md')).toBe(respMD);
  });
});
