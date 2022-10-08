const axios = require('axios');

class Busquedas{
    historial = [];

    constructor(){

    }

    async ciudad(lugar = ''){
        //Petición http
        const resp = await axios.get('https://reqres.in/api/users?page=2');
        console.log(resp.data);
        return []; //Retornar ciudades
    }
}

module.exports = Busquedas;