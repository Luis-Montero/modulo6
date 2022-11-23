//console.log(process.argv.slice(2));/
//console.log(process.argv[3]);

//SIN YARGS
// var argumentos= process.argv.slice(2);
// console.table(argumentos);

// var puerto=0;
// var mensaje='';
// if (argumentos[0]=="--puerto"){
//     puerto=argumentos[1];
//     mensaje=argumentos[3];
// }else{
//     puerto=argumentos[3];
//     mensaje=argumentos[1];
// }

// var http = require('http');
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end(mensaje);
// }).listen(puerto);

//console.log('Server running at http://127.0.0.1:'+puerto);

//CON YARGS
var yargs = require('yargs'); //importar la librería

//var parametrosSinYargs = process.argv.slice(2);
var parametrosConYargs = yargs.argv;

//console.table(parametrosSinYargs);
//console.log("-------------------------------------");
//console.table(parametrosConYargs);

var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end(parametrosConYargs.mensaje);
}).listen(parametrosConYargs.puerto);

console.log('Server running at http://127.0.0.1:'+parametrosConYargs.puerto);