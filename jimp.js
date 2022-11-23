//1.- importar la librería
var jimp= require('jimp');

//2.- leer el archivo desde la url
//https://i.pinimg.com/originals/81/3e/56/813e5649cbdcf60531effccae407397f.jpg
const url='https://i.pinimg.com/originals/81/3e/56/813e5649cbdcf60531effccae407397f.jpg'

async function modificarImagen(){
    let imagen=await jimp.read(url); //leer foto desde la url
     imagen.rotate(90).greyscale().getBuffer(jimp.MIME_JPEG,function(err,datos){ //transformar la foto en blanco y negro
        if(err){
            console.log("error al leer archivo");
            console.log(err.message);
        }else{
            imagen.writeAsync('img/foto.jpg');
            console.log("imagen guardada");
        }
    })
}

//alternativa
async function modificarImagen2(){
    let imagen=await jimp.read(url); //leer foto desde la url
    //await imagen.rotate(90);
    //await imagen.greyscale();
    await imagen.rotate(90);
    imagen.writeAsync('img/foto.jpg');
}

 //3.-ejecutar funcion
 modificarImagen2();

 //4.- enviar la foto hacia el cliente por medio de un server

 var http = require('http');
 var fs= require('fs');
 http.createServer(function (request, response) {   
    fs.readFile('img/foto.jpg',function(error,datos){
        if(error){
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.end('no se pudo cargar la imagen');
        }else{
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(datos);
            response.end();
        }
      })
 }).listen(8081);
 
 console.log('Server running at http://127.0.0.1:8081/');