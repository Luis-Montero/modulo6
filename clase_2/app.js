// declaramos una constante con process.argv. pero, por que el metodo slice(2),
//esto es justamente para ejar fuera edl arreglo las 2 primeras posiciones que 
//contienen datos de las rutas de los archivos.

const argumentos = process.argv.slice(2);

//Declaramos 2 variables que parseen el contenido de lso argumentos y le 
// damos las posiciones de los elementos que queremos utilizar en la operacion.
let num1 = Number(argumentos[0]);
let num2 = Number(argumentos[1]);

//Declamos una variable la cual guardara el producto de la multiplicacion.
let resultado = num1*num2;

//Mostramos por consola el resultado obtenido
console.log(resultado);