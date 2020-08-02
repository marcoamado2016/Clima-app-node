/*
1- npm init
2- npm i --save yargs
3- hacer node app -d "San luis"
4-npm i axios  
axios=>Trabaja con peticiones a servicios rest,usa promesas
request=> Trabaja con peticiones a servicios rest,usa callback
*/

/*
axios({
    "method":"GET",
    "url":"https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"devru-latitude-longitude-find-v1.p.rapidapi.com",
    "x-rapidapi-key":"97516ca064msh32631336aecd8a2p1f13a2jsn45d12b84c08d",
    "useQueryString":true
    },"params":{
    "location":"New York"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })

    */
const lugar=require('./Lugar/lugar');
const clima=require('./Clima/clima');
const argv=require('yargs').options({//options para configurar comandos
  direccion:{
   alias:'d',
   desc:'Direccion de la ciudad para obetener el clima',
   demand:true   
  }  
}).argv //argv para obtener los argumentos
//console.log(argv.direccion);

/*
lugar.getLugarLatiLong(argv.direccion) //esto devuelve una promesa por que la funcion declarada en lugar usa async y eso fuerza a que sea una promesa
.then(res=>{console.log(res)})
.catch(err=>{console.log(err)})

*/
/*
clima.getClima(43.102306,-75.292511)
.then(res=>{console.log(res)})
.catch(err=>{console.log(err)})
*/
const getInfo=async(direccion)=>{


                     
   try {
     
    const cordenadas=await lugar.getLugarLatiLong(direccion) //servicio que retorna las coordenadas
                    // .then(console.log)
                     //.catch(console.log)


    const temp=await clima.getClima(cordenadas.lat,cordenadas.long)
    return `El clima de ${cordenadas.dire} es de ${temp}`

   } catch (error) {
    return `No se pudo determinar el clima de ${direccion}`
   }

}

getInfo(argv.direccion)
.then(console.log)
.catch(console.log)