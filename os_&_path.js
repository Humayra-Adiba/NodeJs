//os

const os = require('os');
const {totalmem,freemem} = require('os');
console.log(os.homedir());
console.log(os.userInfo());
console.log(os.hostname());

console.log(totalmem());
console.log(freemem());

console.log(__dirname);
console.log(__filename);


//path

const path = require('path');

const extensionName = path.extname("index.js");
console.log(extensionName);

const joinName = path.join(__dirname,  "/views");
console.log(joinName);