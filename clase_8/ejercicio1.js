//1.- cargar librerias
var express=require('express');
var fs=require('fs');

//2.-inicializar la app
const app=express();
//3.- generar los GET
//traer todos los autores
app.get("/autores",function (req,res) {
    fs.readdir("libros/",function(err,archivos){
        let nombres=archivos.map(l=>l.split("-")[1]);
        /*alternativa  sin map (usando for)
        let nombres=[];
        let codigos=[];
        for(i=0;i<archivos.length;i++){
            let datos=archivos[i].split("-");
            codigos.push(datos[0]);
            nombres.push(datos[1]);
        }
        */
        res.json(nombres);
    })
    
})

//traer todos los libros de un autor
app.get("/autor/:idAutor/libros",function(req,res){
    res.send("OK");
})

//tarer un autor al azar
app.get("/autor",function (req,res) {
    res.send("OK");
})
//traer  un libro al azr de un autor definido
app.get("/autor/:idAutor/libro",function(req,res){
    res.send("OK");
})

app.listen(8081,function(){
    console.log("server iniciado en el puerto 8081");
})


//funciones
function leerArchivos(){
    fs.readdir('libros/',function(err,datos){
        let codigo=datos.map(l=>l.split("-")[0]);
        console.log(codigo);
    })
}
//leerArchivos();