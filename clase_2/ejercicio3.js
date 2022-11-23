var http = require('http');
var url = require('url');
http.createServer(function (request, response) {
    let q= url.parse(request.url,true);
    let ruta=q.pathname;
    if (ruta=="/login"){
        let parametros=q.query;
        if(parametros.user=="user1" & parametros.password=="12345"){
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.write("login OK!");
        }else{
            response.writeHead(401, {'Content-Type': 'text/plain'});
            response.write("No autorizado!");
        }

    }else{
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write("Error, ruta no encontrada");
    }


  
  response.end();
}).listen(8084);

console.log('servidor iniciado');