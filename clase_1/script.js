//guadar en una constante el modulo fs para importarlo.
const fs = require('fs');

//utilizar el metodo whiteFile para crear un archivo con la tarea
//que se pasa como segundo parametro. El tercer
//parametro es la codificacion del texto.

fs.writeFile('miTarea.txt','1 conectarme a la clase', 'utf8', () =>{
    console.log('Archivo creado con exito')
});

//-------------------------------------------------------------
//Declara el metodo y le pasamos los prametros necesarios
fs.readFile("miTarea.txt", "utf8", (err, data) => {

//Dentro del callback del readFile se ejecuta el metodo whiteFile declarando de 
//nuevo el nombre del archivo miTarea.txt
//pero en este metodo concatena el parametro 'data' con la nueva tarea.

fs.writeFile(
    "miTarea.txt",
    data + " 2) Participar de la clase",
    "utf8",
    () => {
        //dentro del callback del writeFile imprime en consola un mensaje de exito
        console.log("Archivo sobrescrito con exito");
    }
)
})

// utilizarmos el metodo rename para renombrar al archivo existente
fs.rename("miTarea.txt",
"miObligacion.txt", () => {
    console.log("Archivo renombrado")
})

//Utilizamos el metodo unLink para eliminar el archivo existente.
fs.unlink("miObligacion.txt",() => {
    console.log("Archivo eliminado")
})