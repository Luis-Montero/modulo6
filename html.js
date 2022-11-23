//carga del módulo http
var http=require('http');
console.log("iniciando servidor");
//request:peticion que llega desde el cliente (navegador)
//response:la respuesta que envío desde el server al cliente
http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/html'});
    response.write("Hola"); //envía mensaje al cliente
    response.write("<br><h1>que tal</h1>");
    let ruta=request.url; //capuro la url del request (ruta que el cliente escribe en el navegador)
    response.write("la ruta es:" + ruta);
    response.end();
}).listen(8081);

console.log("servidor iniciado");
console.log("para terminar la ejecución, presionar crtl+c");



//boton.addEventListener('click',function(e){
//e=datos del evento
//})