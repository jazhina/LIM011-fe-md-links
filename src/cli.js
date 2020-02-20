#! /usr/bin/env node

const cli = require('../src/clioptions.js');

/* const [,, ...args] = process.argv;
console.log(`Hello World ${args}`); */

const path = process.argv[2];
const option = process.argv[3];
console.log(option);

cli(path, option)
  .then((resp) => console.log(resp))
  .catch((error) => console.log(error));
