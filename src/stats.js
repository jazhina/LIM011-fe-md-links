// const mdlinks = require('../src/mdlinks.js');

// const stats = (path) => {
//   mdlinks.mdlinks(path, { validate: true })
//     .then((data) => {
//       const totalLinks = data.length;
//       const unicos = new Set();
//       data.forEach((element) => {
//         data.add(element.href);
//       });
//       const obj = {
//         Total: totalLinks,
//         Unique: unicos.size,
//       };
//       return obj;
//     });
// };
const statsvalidate = (path) => {
  const invalid = path.filter((element) => element.message === 'FAIL');
  const broken = invalid.length;
  const obj = {
    Broken: broken,
  };
  return obj;
};
function printStatsLinks(arrayObjlinks) {
  const totalLinks = arrayObjlinks.length;
  const arrayUniqueLinks = new Set();
  arrayObjlinks.forEach((objLink) => {
    arrayUniqueLinks.add(objLink.href);
  });
  const totalUniqueLinks = arrayUniqueLinks.size;
  const stats = `Total: ${totalLinks}\nUnique: ${totalUniqueLinks}`;
  return stats;
}

const data = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:\\Users\\ASUS\\Desktop\\RED SOCIAL\\LIM011-fe-md-links\\mds\\example\\read.md',
    status: 200,
    message: 'OK',
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch',
    text: 'FETCH',
    file: 'C:\\Users\\ASUS\\Desktop\\RED SOCIAL\\LIM011-fe-md-links\\mds\\example\\read.md',
    status: 200,
    message: 'OK',
  },
];

printStatsLinks(data);

module.exports = {
  statsvalidate,
};
