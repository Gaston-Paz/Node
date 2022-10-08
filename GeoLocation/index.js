const { leerInput, inquirerMenu, pausa } = require("./Helpers/inquirer");
const Busquedas = require("./Models/busquedas");

const main = async () => {
  const busquedas = new Busquedas();
  let opt = 9;

  while (opt !== 0) {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        //Mostrar msj
        const lugar = await leerInput('Ciudad: ');
        await busquedas.ciudad(lugar);
        //Lista de lugares
        
        //Clima

        //Resultados
        console.log('\nInformación de la ciudad\n'.green);
        console.log('Ciudad: ');
        console.log('Lat: ');
        console.log('Lng: ');
        console.log('Temperatura: ');
        console.log('Mínima: ');
        console.log('Máxima: ');

        break;
      case 2:
        break;
      case 0:
        return;
        break;
    }
    if (opt !== 0) await pausa();
  }
};

main();
