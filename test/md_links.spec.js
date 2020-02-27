const path = require('path');

const objfns = require('../src/index.js');

const mdlinks = require('../src/mdlinks.js');

const stats = require('../src/stats.js');

const clioptions = require('../src/clioptions.js');

const ruta = path.join(process.cwd(), 'mds', 'example', 'read.md');

const directorio = path.join(process.cwd(), 'mds', 'example');

const noMD = path.join(process.cwd(), 'mds', 'app.js');

describe('TRAER RUTA ABSOLUTA', () => {
  it('Convertir la ruta  absoluta', () => {
    expect(objfns.verificar('mds/example/read.md')).toBe(ruta);
  });
  it('Verificar que la ruta sea absoluta', () => {
    expect(objfns.verificar(ruta)).toBe(ruta);
  });
});
describe('REVISAR SI ES ARCHIVO O DIRECTORIO', () => {
  it('SI ES UN ARCHIVO REGRESA VERDADERO', () => {
    expect(objfns.archivo(ruta)).toBe(true);
  });
  it('SI ES UN DIRECTORIO REGRESA FALSO', () => {
    expect(objfns.archivo(directorio)).toBe(false);
  });
});
describe('REVISAR SI ES UN ARCHIVO MD', () => {
  it('ES UN ARCHIVO MD', () => {
    expect(objfns.MD(ruta)).toBe(true);
  });
  it('NO ES UN ARCHIVO MD', () => {
    expect(objfns.MD(noMD)).toBe(false);
  });
});

const respMD = [path.join(process.cwd(), 'mds', 'example', 'documento.md'),
  path.join(process.cwd(), 'mds', 'example', 'read.md'),
  path.join(process.cwd(), 'mds', 'example', 'test', 'example.md'),
  path.join(process.cwd(), 'mds', 'example', 'test', 'informes', 'info.md')];

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
    file: path.join(process.cwd(), 'mds', 'example', 'read.md'),
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch1',
    text: 'FETCH',
    file: path.join(process.cwd(), 'mds', 'example', 'read.md'),
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
    file: path.join(process.cwd(), 'mds', 'example', 'read.md'),
    status: 200,
    message: 'OK',
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch1',
    text: 'FETCH',
    file: path.join(process.cwd(), 'mds', 'example', 'read.md'),
    status: 404,
    message: 'FAIL',
  },
];

describe('VALIDAR LINK', () => {
  it('VALIDAR LINK', (done) => {
    objfns.validarlink(ruta)
      .then((resp) => {
        expect(resp).toEqual(valida);
        done();
      });
  });
});
const respTrue = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: path.join(process.cwd(), 'mds', 'example', 'read.md'),
    status: 200,
    message: 'OK',
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch1',
    text: 'FETCH',
    file: path.join(process.cwd(), 'mds', 'example', 'read.md'),
    status: 404,
    message: 'FAIL',
  },
];
const respFalse = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: path.join(process.cwd(), 'mds', 'example', 'read.md'),
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch1',
    text: 'FETCH',
    file: path.join(process.cwd(), 'mds', 'example', 'read.md'),
  },
];
describe('MDLINKS', () => {
  it('mdlinks retorna hrfef, text,file,status,mesage ', (done) => {
    mdlinks(ruta, { validate: true })
      .then((resp) => {
        expect(resp).toEqual(respTrue);
      });
    done();
  });
  it('mdlinks retorna hrfef, text,file', (done) => {
    mdlinks(ruta, { validate: false })
      .then((resp) => {
        expect(resp).toEqual(respFalse);
      });
    done();
  });
  it('Error', (done) => {
    mdlinks(ruta, { validate: 'otro' })
      .then((resp) => {
        expect(resp).toEqual(resp);
      });
    done();
  });
});
const totalunique = { Total: 2, Unique: 2 };

const totaluniquebroken = {
  Total: 2,
  Unique: 2,
  Broken: 1,
};
describe('STATS', () => {
  it('stats total y unicos', (done) => {
    stats(ruta, false)
      .then((resp) => {
        expect(resp).toEqual(totalunique);
      });
    done();
  });
  it('stats total,unicos,rotos', (done) => {
    stats(ruta, true)
      .then((resp) => {
        expect(resp).toEqual(totaluniquebroken);
      });
    done();
  });
});

describe('CLIOPTIONS', () => {
  it('SI SOLO COLOCA MDLINKS', (done) => {
    clioptions()
      .then((resp) => {
        expect(resp).toEqual(resp);
      });
    done();
  });
  it('SI COLOCA MDLINKS + RUTA ', (done) => {
    clioptions(ruta)
      .then((resp) => {
        expect(resp).toEqual(resp);
      });
    done();
  });
  it('SI COLOCA MDLINKS + RUTA + validate', (done) => {
    clioptions(ruta, '--validate')
      .then((resp) => {
        expect(resp).toEqual(resp);
      });
    done();
  });
  it('SI COLOCA MDLINKS + RUTA + STATS', (done) => {
    clioptions(ruta, '--stats')
      .then((resp) => {
        expect(resp).toEqual(' Total: 2\n Unique: 2');
      });
    done();
  });
  it('SI COLOCA MDLINKS + RUTA + stats + validate', (done) => {
    clioptions(ruta, '--stats', '--validate')
      .then((resp) => {
        expect(resp).toEqual(' Total: 2\n Unique: 2\n Broken: 1');
      });
    done();
  });
});
