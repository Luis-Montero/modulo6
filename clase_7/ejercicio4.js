var yargs=require('yargs');
var axios=require('axios').default;

async function buscarPokemon(inicio,cantidad){    
    //console.log("inicio:"+inicio,"cantidad:"+cantidad)
    let respuesta=await axios.get("https://pokeapi.co/api/v2/pokemon?limit="+cantidad+"&offset="+inicio);        
    respuesta.data.results.map(e=>console.log(e.name));
}

yargs.command({
    command:'traer_pokemon',
    describe:'este comando tae una cantidad de pokemon determinada por el usuario',
    builder:{
        inicio:{
            type:'number',
            describe:'número del pokemon inicial de la búsqueda'
        },
        cantidad:{
            type:'number',
            describe:'cantidad de pokemones a traer'
        }
    },
    handler:function(args){
        buscarPokemon(args.inicio,args.cantidad);
    }
})
yargs.parse();