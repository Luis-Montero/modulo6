var http = require('http');
var url  = require('url');
http.createServer(function (request, response) {
  
    let q=url.parse(request.url,true);
    let recurso = q.pathname;
    if(recurso=="/login"){
        //OK
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write("TODO OK!!!");
    }else{
        //NOT FOUND
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write("TODO MAL, RECURSO NO ENCONTRADO!");
    }
    //response.write(recurso);
  response.end();
}).listen(8083);

console.log('servidor iniciado');