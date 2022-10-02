const {v4:identity} = require('uuid');
class Tarea {
    id = '';
    descripcion = '';
    completadoEn = null;

    constructor(desc){
        this.descripcion = desc;
        this.id = identity();
    }
}

module.exports = Tarea;