const opciones = {
    descripcion: {
        demand: true,
        alias: 'd',
    }
}
const opcionesAct = {
    descripcion: {
        demand: true,
        alias: 'd',
    },
    completado: {
        alias: 'c',
        default: true
    }
}
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opciones)
    .command('actualizar', 'Actualiza el estado de una tarea', opcionesAct)
    .command('borrar', 'Borra una tarea', opciones)
    .help()
    .argv;

module.exports = {
    argv
}