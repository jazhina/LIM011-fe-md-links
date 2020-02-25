const nodeFetch = jest.requireActual('node-fetch');
const fetchMock = require('fetch-mock').sandbox();

Object.assign(fetchMock.config, {
  fetch: nodeFetch,
});

fetchMock
  .mock('https://es.wikipedia.org/wiki/Markdown', 200)
  .mock('https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch1', 404)
  .mock('*', 200);

module.exports = fetchMock;
