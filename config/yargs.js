const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        description: 'Base para la multiplicacion',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption: false
    })
    .option('h',{
        alias: 'hasta', 
        type: 'number',
        default: 10,
        description: 'Hasta donde se multiplicara'
    })
    .check((argv, option) => {
        if (isNaN(argv.base)) {
            throw 'La base tiene que ser un numero';
        }

        if(isNaN(argv.h)){
            throw 'El hasta debe ser un numero';
        }
        
        return true
    }).argv;

module.exports = argv;