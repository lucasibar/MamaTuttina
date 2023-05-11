const { Raza, Temperamento } = require("../../db");
const axios = require("axios");
const { YOUR_API_KEY } = process.env;

module.exports = {
  getRazas: async function () {
  //Razas de la api
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
  const razasBDD = await Raza.findAll({
    include: {
      model: Temperamento,
      attributes: ["id", "name"],
      through: {attributes: []}
    }
  });

return [...razasAPI, ...razasBDD]
},

getByName :  async function (name) {   
  const busquedaApi = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
  const [datosApi] = busquedaApi.data
  const busquedaBDD = await Raza.findOne({ where: { name: name } });
  
  const respuesta = datosApi? datosApi : busquedaBDD
return respuesta
},

getByid: async function (idRaza) {   
  if(idRaza.length>10){
  const razasBDD = await Raza.findAll({where: {id: idRaza}});
  return razasBDD[0]
  }else{
  const busquedaApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
  const filtro = busquedaApi.data.filter(r => r.id == idRaza)
  return filtro[0]
  }
},

temperamentosApi: async function () {
  const busquedaApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
  
  const temperamentosAPI = busquedaApi.data.map(e => e.temperament?e.temperament:null)

  const  temperamentosTotales = []
  temperamentosAPI.forEach(elemento=> {
  if(elemento){
      const pushTemperamento = elemento.split(", ")
      temperamentosTotales.push(...pushTemperamento)
  }
  })

  const filtro = temperamentosTotales.reduce((acc,temp)=>{
      if(!acc.includes(temp)){
        acc.push(temp);
      }
      return acc;
    },[])
  
return filtro
},

postRazas:   async function ({name, height, weight, life_span}) {
  if(!name || !height || !weight || !life_span){
    throw Error("NO SE CARGARON BIEN LOS DATOS")
  }else{
    const newRaza = await Raza.create({ name, height, weight, life_span });
    return "se creo con exito la raza"
  }    
}
}