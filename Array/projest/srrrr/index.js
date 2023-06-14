const {argv} = require('yargs');
const path = require('path');
const todo = require('./todo');
const {saveFile,readFile} = require('./util');
const {ADD , UPDATE, NEXT, DONE, FIND, LIST } = require("./commande");


const fileName = '../data.json';
const filePath = path.resolve(__dirname,fileName);



(function inti() {
    const data = readFile(filePath)|| [];
    const todo = new todo(data);
    const {__: base}= argv;

    console.log(argv);

})();