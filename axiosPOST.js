//1.- importar el módulo (default es para que vs cargue la documentacion y el autocompletar)
var axios = require('axios').default;

//2.-crear el objeto que vamos a insertar en la BD de la API
var usuario={
    name:'luis',
    email:'luisemontero16@gmail.com'
}

var config={
    headers:{
        'content-type':'application/json'
    }
}

//https://reqres.in/api/users
//3.-crear función asíncrona para enviar un post
async function crearUsuario(){    
    let respuesta= await axios.post('https://reqres.in/api/users',usuario,config);
    console.log("código:" + respuesta.status);
    console.log("status:" + respuesta.statusText);
    console.log("datos");
    if(respuesta.status==201){
        console.log(respuesta.data);
    }else{
        console.log("error");   
    }
    
}
//ejecutar la función.
crearUsuario();