//1.- importar libreria o módulo YARGS
var yargs=require('yargs');
var chalk=require('chalk');
//2.- crear una función que 
function validarLogin(user,pass){
    if(user=='denis' && pass=='12345'){
        console.log(chalk.green.inverse("aceeso corrrecto. login iniciado satisfactoriamente"));
    }else{
        console.log(chalk.red.inverse("error al iniciar sesión. revise usuario o password"));
    }
}
//3.-crear el comando "login"
yargs.command({
    command:'login',
    describe:'este comando sirve para loguearse',
    builder:{
        usuario:{
            describe:'nombre de usuario',
            demandOption:true,
            default:'ingrese su nombre de usuario',
            type:'string'
        },
        password:{
            describe:'password de la cuenta',
            demandOption:true,
            default:'ingrese su contraseña',
            type:'string'
        }
    },
    handler:function(args){
        validarLogin(args.usuario,args.password);
    }
});
yargs.parse(); //ejecucion del comando