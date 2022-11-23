//importar el modulo 'child_process' en una constante con el mismo nombre
const child_process = require("child_process");

//creamos las variables num1 y num2 de forma global con valores null.
let num1 = null;
let num2 = null;

//Creamos una funcion "ejecutar" que reciba
//como parametro el nombre de un archivo a ejecutar
function ejecutar(archivo){
    //la funcion creada retornada una promesa.
    return new Promise((resolve) => {
        //usarmos el metodo 'exec' pasando como primer pametro una concatenacion con el parametro recibido en la funcion, como segundo
        // parametro el callback 'resolve' con el resultado de la ejecucion en formato Number. Esto para poder sumar aritmeticamente ambos resultados
        child_process.exec(`node ${archivo}`, function (err, result) {
            resolve(Number(result));
        });
    });
}

//llamaremos a la funcion ejecutar pasando como argumento el nombre del primer archivo y el callback de su metodo "then" reasignamos el valor de la variable
//"num1" con el parametro "numero1", recibido como parametro por el callback "resolve" de la promesa.
ejecutar("clase_2/primerNumero.js").then((numero1) => {
    num1 = numero1;

    //Dentro del metodo "then" de la primera llamada a la funcion, vuelve a la llamar a la funcion ejecutar pero esta vez especificando el nombre del segundo archivo reasignando
    //en el callback el valor de "num2" con el parametro e imprimiendo por consola la suma de ambas variables.
    ejecutar("clase_2/segundoNumero.js").then((numero2) => {
        num2 = numero2;
        console.log(num1 + num2);

    })
})