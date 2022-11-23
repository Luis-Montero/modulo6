//Paso 1: construir el server
//Paso 2: analizar la ruta, y dependiendo del resultado, 
//enviar distintas respuestas
//la ruta debe ser del estilo:  127.0.0.1:8090/datos. 
//si viene cualquier otra cosa, se debe responder con error not found
//paso 3: cargar el archivo que corresponda, y enviar el conteido al cliente

var http = require('http');
var url  = require('url');
var fs   = require('fs');

http.createServer(function (request, response) {
    let q= url.parse(request.url,true);
    if (q.pathname=="/datos"){
        //OK    -- está hecho de manera síncrona            
        /*response.writeHead(200, {'Content-Type': 'text/html'});
        let datos=fs.readFileSync('clase_3/exito.html');                
        response.write(datos.toString());
        response.end();*/
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('clase_3/exito.html',function(err,data){
            if(err){
                console.log(err.message)
            }else{             
                response.write(data.toString());                
            }
            response.end();
        })
    }else{
        //ERROR  --está hecho de maner asincrona
        response.writeHead(404, {'Content-Type': 'text/html'});
        fs.readFile('clase_3/error.html',function(err,data){
            if(err){
                console.log(err.message)
            }else{
                //console.log(data.toString())
                response.write(data.toString());                
            }
            response.end();
        })
        //
    }  
 
}).listen(8090);

console.log('servidor escuchando peticiones en el puerto 8090');