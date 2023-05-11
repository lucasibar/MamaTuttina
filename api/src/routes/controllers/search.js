const { getRazas} = require("./getRazas")

const search = async function (busqueda) { 

  try{
  const dataTotal = await getRazas()
  const respuestaFinalTemps = dataTotal.filter( e => e.temperament?.toLowerCase().includes(busqueda.toLowerCase()))
  const respuestaFinalNames = dataTotal.filter( e => e.name?.toLowerCase().includes(busqueda.toLowerCase()))
  const respuestaBusqueda =[...respuestaFinalTemps, ...respuestaFinalNames]
  
  return respuestaBusqueda
  }
  catch{throw Error ("Fallo la coneccion con la base de datos o la api")}
}

module.exports = { search };
  