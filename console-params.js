const { crearArchivo } = require('./multiplicar/multiplicar');

let argv = process.argv;
let parametros = argv[2];
let base = parametros.split('=')[1];

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${archivo}`))
    .catch(err => console.log(`Error: ${err}`));