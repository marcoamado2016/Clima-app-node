const axios =require('axios');

const getClima=async(lat,lon)=>{
const respuesta=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9578c5c44334cf45fba781f1a9aee2ac`)
return respuesta.data.main.temp;

}

module.exports={
    getClima
}