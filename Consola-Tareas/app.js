require("colors");
const { guardarDB, leerDB } = require("./Helpers/file");
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  // mostrarListadoChecklist
} = require("./helpers/inquirer");
const Tareas = require("./Helpers/models/tareas");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const tareasDB = leerDB();
  if(tareasDB){
    tareas.parseJsonTarea(tareasDB);
    }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput('Descripción: ');
        tareas.crearTarea(desc);
        break;
      case "2":
        tareas.listarTodasLasTareas();
        break;
      case "3":
        tareas.listarPendientesCompletadas(true,true);
        break;
      case "4":
        tareas.listarPendientesCompletadas(false,true);
        break;
      case "5":
        const idCompletar = await listadoTareasBorrar(tareas.listarPendientesCompletadas(false));
        const respCompletar = await confirmar(tareas.listado.find(x => x.id === idCompletar),'completar');
        if(respCompletar)tareas.completar(idCompletar);
        break;
      case "6":
        const id = await listadoTareasBorrar(tareas.listado);
        const resp = await confirmar(tareas.listado.find(x => x.id === id),'borrar');
        if(resp)tareas.borrarTarea(id);
        break;
      case "0":
        break;
    }

    guardarDB(tareas.listado);

    await pausa();
  } while (opt !== "0");
};

main();
