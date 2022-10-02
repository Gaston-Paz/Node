const Tarea = require('./tarea');

class Tareas{
    _lista = {};

    get listado(){
        const listado = [];
        Object.keys(this._lista).forEach(x => {
            listado.push(this._lista[x]);
        });
        return listado;
    }

    constructor(){
        this._lista = {};
    }

    crearTarea(desc){
        const tarea = new Tarea(desc); 
        this._lista[tarea.id] = tarea;
    }

    parseJsonTarea(tareas){
        tareas.forEach(t => {
            this._lista[t.id] = t;
        });
    }

    listarTodasLasTareas(){
        this.listado.forEach((t,i) => {
            console.log(`${i+1}.`.green);
            console.log(`Nombre: ${t.descripcion.green}`);
            console.log(`Completada: ${t.completadoEn === null ? 'No'.red : 'Si'.green}`);
            console.log(`Fecha de completación: ${t.completadoEn === null ? '-' : t.completadoEn.green}\n`)
        });
    }

    listarPendientesCompletadas(completadas,mostrar=false){
        let listaFiltrada = [];
        if(completadas)listaFiltrada = this.listado.filter(f => f.completadoEn !== null);
        else listaFiltrada = this.listado.filter(f => f.completadoEn === null);
        if(mostrar){

            listaFiltrada.forEach((t,i) => {
                console.log(`${i+1}.`.green);
                console.log(`Nombre: ${t.descripcion.green}`);
                console.log(`Completada: ${t.completadoEn === null ? 'No'.red : 'Si'.green}`);
                console.log(`Fecha de completación: ${t.completadoEn === null ? '-' : new Date(t.completadoEn).toDateString().green}\n`)
            });
        }
        return listaFiltrada;
    }

    borrarTarea(id){
        if(this._lista[id]){
            delete this._lista[id];
        }
    }

    completar(id){
        if(this._lista[id]){
            this._lista[id].completadoEn = new Date();
        }
    }

}

module.exports = Tareas;