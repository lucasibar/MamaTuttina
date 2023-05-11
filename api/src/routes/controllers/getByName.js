const { Raza } = require("../../db");
const axios = require("axios");

module.exports = {
  getByName: async function (name) {   
  const busquedaApi = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
  const [datosApi] = busquedaApi.data
  const busquedaBDD = await Raza.findOne({ where: { name: name } });
  
  const respuesta = datosApi? datosApi : busquedaBDD

return respuesta
},
}
