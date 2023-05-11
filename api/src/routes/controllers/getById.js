const { Raza, Temperamento} = require("../../db");
const axios = require("axios");
const { YOUR_API_KEY } = process.env;

const getById = async function (id) {   
  if(id.length>10){
    const razasBDDCrudo = await Raza.findAll({where: {id: id}, include:Temperamento});
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
        weight: e.weight,
        height:e.height,
        life_span:e.life_span
      }
    })
    return razasBDD[0]

  }else{
    const busquedaApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
    const filtro = busquedaApi.data.filter(r => r.id == id)
    const razasAPI = filtro.map(e=> {
      return {
        id: e.id,
        img: e.image?.url,
        name: e.name,
        temperament: e.temperament,
        weight: e.weight?.metric,
        height:e.height?.metric,
        life_span:e.life_span
      }
    })
    return razasAPI[0]
  }
}

module.exports = { getById };
  