const { Raza, Temperamento } = require("../../db");
const axios = require("axios");
const { YOUR_API_KEY } = process.env;

module.exports = {
getRazas: async function () {
  try{
//Razas de API
  const busquedaApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
  const razasAPI = busquedaApi.data.map( e =>{ 
    return {
      id: e.id,
      img: e.image.url,
      name: e.name,
      temperament: e.temperament,
      weight: e.weight.metric 
    }

    })

//Razas de BDD
  const razasBDDCrudo = await Raza.findAll({
    attributes:[ 'id', 'name', 'weight', 'img'],
    include: Temperamento
  });
  const razasBDDJSON = razasBDDCrudo.map(el=>el.toJSON())

  razasBDDJSON.forEach(el => {
   let temperament = []
    el.Temperamentos.forEach(el=>{
      temperament.push(el.name)
    })
    el.temperament = temperament.join(", ")
  });
  
  const razasBDD = razasBDDJSON.map(e=> {
    return {
      id: e.id,
      img: e.img,
      name: e.name,
      temperament: e.temperament,
      weight: e.weight
    }
  })

  return [...razasAPI, ...razasBDD]
  }
  catch{throw Error ("Fallo la coneccion con la base de datos o la api")}

}}
