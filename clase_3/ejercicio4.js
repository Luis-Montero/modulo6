//url correcta
//http://localhost:8090/usuario?rut=123&nombre=luis&apellido=montero
//cargar las librerias que necesitamos
var http = require('http');
var url  = require('url');
var fs   = require('fs');


http.createServer(function (request, response) {
 //separar la url
 var urlSeparada = url.parse(request.url,true);
 //la variable urlSeparada consta ahora de varias partes.
 //host: la parte de la direccion del servidor (localhost:80811)
 //pathname: la parte entre los slash (/): /usuario
 // query: la parte de los parametros (?rut=123&nomnbre...), vienen separados.

 if (urlSeparada.pathname=="/usuario"){//OK
   let datos={
      rut:urlSeparada.query.rut,
      nombre:urlSeparada.query.nombre,
      apellido:urlSeparada.query.apellido
   }    
   //----------------ARCHIVO---------------------
   fs.writeFile("usuarios/"+datos.rut+".txt",JSON.stringify(datos),function(err){
      if(err){
         console.log(err.message);
      }else{
         console.log("archivo creado correctamente");
      }
   } )

   //----------------RESPUESTA-------------------------
   response.writeHead(200,{'Content-Type': 'application/json'})
   response.write(JSON.stringify(datos));
   response.end();

 }else{//Errror
    response.writeHead(404,{'Content-Type': 'text/plain'})
    response.end();
 }



}).listen(8091);
