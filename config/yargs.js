const opts = {

    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Lista la tabla de multiplicar', opts)
    .command('crear', 'Crea la tabla de multiplicar', opts)
    .argv;

module.exports = {
    argv
}