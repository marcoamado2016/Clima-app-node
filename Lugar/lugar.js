const axios=require('axios');

const getLugarLatiLong=async(direccion)=>{

const encodeUlr=encodeURI(direccion); //encodeURI() agrega caracteres especiales
//console.log(encodeUlr);

//Configurando los headers
const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
    headers: {'X-RapidAPI-Key': '97516ca064msh32631336aecd8a2p1f13a2jsn45d12b84c08d'}
  });

   const respuesta=await instance.get();
  // console.log(respuesta.data.Results);
/*
instance.get()
.then(resp=>{

    let ciudadMock=[{
        "name":"New York Mills, New York",
        "type":"city",
        "c":"US",
        "zmw":"13417.1.99999",
        "tz":"America/New_York",
        "tzs":"EST",
        "l":"/q/zmw:13417.1.99999",
        "ll":"43.102306 -75.292511",
        "lat":"43.102306",
        "lon":"-75.292511"
        }]
        if(resp.data.Results===null){
           
            console.log(
                //resp.data.Results[0]) Results te devuelve los resultados
                ciudadMock[0])
        }else{
          console.log(resp.data.Results[0])   
        }

    })
.catch(err=>{console.log("ERRO "+err)})

*/
let ciudadMock
//if(respuesta.data.Results.length==0){
if(respuesta.data.Results==null){
 // throw new Error(`No hay resultados para ${direccion}`);
    ciudadMock=[{
    "name":"New York Mills, New York",
    "type":"city",
    "c":"US",
    "zmw":"13417.1.99999",
    "tz":"America/New_York",
    "tzs":"EST",
    "l":"/q/zmw:13417.1.99999",
    "ll":"43.102306 -75.292511",
    "lat":"43.102306",
    "lon":"-75.292511"
    }]

}
/*
const data=respuesta.data.Results[0];
const dire=data.name
const lat=data.lat;
const long=data.log;
*/
const data=ciudadMock[0];
const dire=data.name;
const lat=data.lat;
const long=data.lon
return{ //Por emascript 6 crea un objeto con la propiedad
dire,
lat,
long    
}
}

module.exports={
    getLugarLatiLong

}