var yargs = require('yargs');
var fs    = require('fs');
var chalk= require('chalk');
//leer archivo
function leerArchivo(ruta){
    fs.readFile(ruta,function (err,data) {
         if(err){
        console.log(chalk.red.inverse("Error al leer archivo"));
        console.log(chalk.red.inverse(err.message));
         }else{
            console.log(chalk.green.inverse("contenido del archivo;"));
            console.log(chalk.bgBlueBright(data));
         }
      })
}
//creamos comando
yargs.command({
    command:'leer',
    builder:{
        ruta:{
            type:'string'
        }
    },
    handler:function(args){
        leerArchivo(args.ruta);
    }
});
yargs.parse();