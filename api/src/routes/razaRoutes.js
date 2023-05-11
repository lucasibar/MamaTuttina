const { Router } = require('express');
const { getRazas} = require("./controllers/getRazas")
const { getByName} = require("./controllers/getByName")
const { getById} = require("./controllers/getById")
const { postRazas} = require("./controllers/postRazas")

const razaRoutes = Router();

razaRoutes.get('/', async (req, res)=>{
    const {name} = req.query
    try{res.status(200).json(name? await getByName(name): await getRazas())}
    catch(error){res.status(400).json({Error: error.message})} 
})

razaRoutes.get('/:id', async (req, res)=>{
    const id = req.params.id
    try{res.status(200).json( await getById(id))}
    catch(error){res.status(400).json({Error: error.message})} 
})

razaRoutes.post('/',async (req, res)=>{
    try{
        const datosForm = req.body
        res.status(200).json( await postRazas(datosForm))}
    catch(error){res.status(400).json({Error: error.message})} 
})


module.exports = razaRoutes