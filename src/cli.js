#! /usr/bin/env node

const cli = require('../src/clioptions.js');

/* const [,, ...args] = process.argv;
console.log(`Hello World ${args}`); */

const path = process.argv[2];
const options = process.argv[3];
const option2 = process.argv[4];
// console.log(options);

cli(path, options, option2)
  .then((resp) => console.log(resp))
  .catch((error) => console.log(error));
