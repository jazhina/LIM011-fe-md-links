const mdlinks = require('../src/mdlinks.js');


const stats = (path, option) => mdlinks(path, { validate: option })
  .then((data) => {
    const array = [];
    data.forEach((element) => array.push(element.href));
    const unicos = new Set(array);
    const broken = data.filter((element) => element.message === 'FAIL');
    let obj;
    if (option === true) {
      obj = {
        Total: data.length,
        Unique: unicos.size,
        Broken: broken.length,
      };
    } else {
      obj = {
        Total: data.length,
        Unique: unicos.size,
      };
    }
    return obj;
  })
  .catch(Error('Hubo un error'));

module.exports = stats;


/* stats('./mds/example/read.md', false)
  .then((res) => {
    console.log(res);
  }); */
