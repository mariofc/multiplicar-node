const colors = require('colors');
const argv = require('./config/yargs').argv;

//const { argv } = require('./config/yargs');

const { crearArchivo, listar } = require('./multiplicar/multiplicar');

let comando = argv._[0];

// console.log(argv);

switch (comando) {
    case 'listar':

        listar(argv.base, argv.limite);
        break;
    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ' + `${archivo}`.green))
            .catch(err => console.log(`Error: ${err}`));
        break;
    default:
        console.log('Comando no reconocido');

}






// let base = 'a6';




// console.log(argv);