const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Este comando permite crear una nueva tarea', {
        descripcion
    })
    .command('borrar', 'Este comando permite borrar una tarea', {
        descripcion
    })
    .command('actualizar', 'Este comando permite actualizar una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Este comando permite listar todas las tareas', {

    })
    .help()
    .argv;

module.exports = {
    argv
}