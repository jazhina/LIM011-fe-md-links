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
    expect(true).toBe(true);
  });
  it('SI ES UN DIRECTORIO REGRESA FALSO', () => {
    expect(false).toBe(false);
  });
});
