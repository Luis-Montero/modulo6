require('dotenv').config();
console.log(process.env.PUERTO);
console.log(process.env.CORREO);
console.log(process.env['CORREO']);

var http = require('http');

const puerto = process.env.PUERTO || 8081

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(puerto);

console.log('Server running at '+ puerto);