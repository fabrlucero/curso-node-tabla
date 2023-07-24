const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    let salida = ''
    for (let index = 0; index < hasta; index++) {
        let result = base * (index + 1)
        salida += `${base}X${index + 1}=${result}\n`
    }

    if (listar) {
        console.log('==========================='.green)
        console.log(`Tabla del ${base}`.yellow)
        console.log('==========================='.green)

        console.log(salida.yellow)
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

    return `Tabla del ${base} creado`
}

module.exports = {
    crearArchivo: crearArchivo
}

