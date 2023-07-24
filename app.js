
// const { argv, option } = require('yargs');

console.clear();
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.log(argv)
//Imprimir la tabla del 5





// console.log('Base yargs: ', argv.base)
// const [,,arg3 = 'base=5'] = process.argv
// const [, base] = arg3.split('=')


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
