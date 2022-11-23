
var http = require('http');
var url  = require('url');

http.createServer(function (request, response) {
  // cargar la url en q, separada por partes
  let q = url.parse(request.url,true);
  //cargar los parámetros de la url, en un objeto  
  let parametros=q.query;
  //cargar la ruta
  let ruta=q.pathname;
  //cargar el host
  let host=q.host;
  response.writeHead(200, {'Content-Type': 'text/plain'});
  //escribir al cliente el primer parametro   
  response.write ("el valor del parametro id es "+ parametros.id);
  response.write("\nel valor del parametro ciudad es " + parametros.ciudad);
  response.write("\nla ruta es: " + ruta);
  response.write("\nel servidor es: "+ host);
  response.end();
}).listen(8082);

console.log('servidor iniciado (8082)');

/*ejemplo de q.query
si tenemos la url: http://localhost:8081/usuarios/nombre?id=1&ciudad=valdivia
tenemos dos parametros, id y ciudad
la funcion query (de q.query) crea un objeto con dos propiedades, que corresponden a los parametros:
parametros=q.query;
es equivalente a 
parametros={
    id=1,
    ciudad='valdivia'
}
por lo tanto, puedo accder a ellos con el punto
ejemplo: parametros.id o parametros.ciudad
*/