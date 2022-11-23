/*SERVER con http------------------------------------------------------
var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
*/
// server con EXPRESS---------------------------------------------------
//1.- importar módulo
const express=require('express');
//2.- crear o inicializar la aplicación de express
const app = express();
//3.- crear variable con el puerto
const puerto = 8081; //esto se podría cargar desde el archivo -env
//4.- creacion de la función para u método específico y una ruta específica.
app.get('/',function (request,response) {
    response.send("Hola desde express!!!!");
});
app.get('/usuario', function(req,res){
    res.send("se ha consultado un usuario");
});
app.post('/usuario',function(req,res){
    res.send("Se ha ingresado un usuario!");
})
//agregar una funcion que tenga parametros en la ruta
app.get('/autor/:idAutor/libro/:idLibro',function(req,res){
    //res.send("enviando datos...");
    res.send(req.params);
})
//funcionalidad con dos callback
app.get("/comida",function(req,res,next){
    console.log("1.-solicitud de comida recibida");
    next();
},function(req,res,next){
    res.send("2.-enviando comida...");
    next();
},function(req,res){
    console.log("3.-datos enviados...fin");
});

//funciones encadenadas para una misma ruta
app.route('/autor')
.get(function(req,res){
    res.send("get recibido");
})
.put(function(req,res){
    res.send("put recibido");
})
.post(function(req,res){
    res.send("post recibido");
})

//archivos estáticos
app.use(express.static('public'));

app.get("/foto",function (req,res) {
    res.send("<img src='img/foto.jpg' />");
})

//leer json
app.use(express.json());
app.post("/libro",function(req,res){
    let datos=req.body;
    console.log("nombre del libro:" + datos.nombre);
    res.send("datos recibidos");
})


//5.- ejecutar el server
app.listen(puerto,function(){
    console.log("servidor iniciado en el puerto " + puerto);
});
