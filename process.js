var child_process=require("child_process");

//child_process.exec("node env.js"); //ejecucion de un archivo js externo

//comandos de consola
//para gitbash
// child_process.exec("ls ",function(err,stdout,stderr){
//     if(err){
//         console.log(err.message);
//     }else{
//         console.log(stdout);
//     }
// })
//para cdm
child_process.exec("dir",function(err,stdout,stderr){
    if(err){
        console.log(err.message);
    }else{
        console.log(stdout);
    }
})