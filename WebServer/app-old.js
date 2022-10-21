const http = require('http');

http.createServer((requets, response) => {
    response.write('Hola Mundo');
    response.end();
}).listen(8080);

console.log('Escuchando el puerto 8080');