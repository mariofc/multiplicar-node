const fs = require('fs');
const colors = require('colors');

let data = '';

let listar = (base, limite) => {
    console.log('============'.green);
    console.log(`Tabla ${base}`.green);
    console.log('============'.green);
    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * limite}`);
    }
}

let crearArchivo = (base, limite) => {


    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un número');
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i * base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listar
}