//console.log(process.argv);
//console.log(process.argv.slice(2));
//console.log("resultado="  + (Number(process.argv[2])*Number(process.argv[3])));

var child_process=require('child_process');

var parametros=process.argv.slice(2);
child_process.exec(parametros.join(' '),function(err,stdout){
    if(!err){
        console.log(stdout);
    }
})