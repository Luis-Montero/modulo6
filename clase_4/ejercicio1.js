//Localhost:8093/comida?nombre=Arroz
//Localhost:8093/fin
//paso 1.- crear el servidor
//paso 2.- verificar el request (en este caso, la ruta comida y el parametro nombre)
//paso 3.- guardar los datos que vienen (lista de alimentos)
//paso 4.- cuando llegue la ruta "fin", enviar la lista por correo

var http        = require('http');
var url         = require('url');
var nodemailer  = require('nodemailer');
require('dotenv').config();

var alimentos="";

//configuracion del correo
var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'contactobrokerinmobiliariocl@gmail.com', //poner sus correos
        pass : process.env.PASSWORD //cambiar esto al de uds.
    }
});

http.createServer(function (request, response) {
    let q= url.parse(request.url,true); //url separada
    //comprobar que la ruta sea "comida" o "fin"
    if (q.pathname=="/comida"){
        //comprobar que exista un sólo parámetro y sea "nombre"        
        //console.table(q.query);
        //console.table(Object.keys(q.query));
        if(Object.keys(q.query).length!=1){
            response.writeHead(404, {'Content-Type': 'text/plain'});      
            response.write("Ruta no encontrada (1)");    
        }else if(Object.keys(q.query)[0]!="nombre"){
            response.writeHead(404, {'Content-Type': 'text/plain'});      
            response.write("Ruta no encontrada (2)");    
        }else{
            alimentos+=q.query.nombre+"; "
            console.log("alimentos:" + alimentos);
            response.writeHead(200, {'Content-Type': 'text/plain'}); 
            response.write("OK!");
        }
    }else if(q.pathname=="/fin"){
        //generar contenido del correo
        var correo = {
            to:"contactobrokerinmobiliariocl@gmail.com",
            from:"luisemontero16@gmail.com",
            subject:"lista de ingredientes!",
            text: alimentos
        }
        //enviar correo
        transporter.sendMail(correo,function(err,info){
            if(err){
                console.log(err.message);
            }else{
                console.log("correo enviado");
                console.log(info.response);
                alimentos="";
            }
        })
        response.write("correo enviado");        
    }else{
        response.writeHead(404, {'Content-Type': 'text/plain'});      
        response.write("Ruta no encontrada");
    }
    

  //response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end();
}).listen(8081);

console.log('servidor iniciado');