function factorial(numero){
    let resultado=1;
    for ( i = 1; i <= numero; i++) {
        resultado*=i;        
    }
    return resultado;
}

//console.log(process.argv);
var argumentos=process.argv.slice(2);
//console.log(argumentos);

if(argumentos.length==0){
    console.log("debe ingresar un argumento (número)");
}else if(argumentos.length>1){
    console.log("demasiados argumentos");
}else if(!Number(argumentos[0]) ){
    console.log("el argumento ingresado debe ser un número mayor a 0");
}else{
    console.log("el valor factorial de "+argumentos[0].toString()+" es "+factorial(Number(argumentos[0])));
}
