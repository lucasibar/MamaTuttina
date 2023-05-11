const { Raza, Temperamento} = require ("../../db");


module.exports = { 
  postRazas: async function ({ heightMAX, heightMIN, life_span, name, temperamentos, weightMAX, weightMIN, otroCampo}) {

    const height = `${heightMIN} - ${heightMAX}`
    const weight = `${weightMIN} - ${weightMAX}`

    const newRaza = await Raza.create({ name, height, weight, life_span, otroCampo});
    for(let i = 0; i < temperamentos.length; i++) {
      const [temperamentosForm, created] = await Temperamento.findOrCreate({
        where:{
          name: temperamentos[i]
        }
      })
      await newRaza.addTemperamento(temperamentosForm)}
    const respuesta= `Se creo con exito la raza ${name}` 
    return respuesta
  
}
}

