const axios = require ("axios")
const {YOUR_API_KEY} = process.env;
const {Temperamento}= require("../../db")

module.exports = {
temperamentosApi: async function temperamentosApi(){    
try{  
  const busquedaApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
  const tempAPI = busquedaApi.data
  .filter(el => el.temperament != null)
  .map(e=>e.temperament.split(", "))
  .reduce((acumulador, temp)=>acumulador.concat(temp))
  
  const tempsFiltrados = tempAPI.reduce((acc,t)=>{
    if(!acc.includes(t)){acc.push(t)}
    return acc;
  },[])
  
  await Promise.all(
    tempsFiltrados.map( temp => {
    Temperamento.create({ name: temp });
  })
)
return tempsFiltrados
}catch{throw Error ("Fallo la coneccion con la API")}
}}