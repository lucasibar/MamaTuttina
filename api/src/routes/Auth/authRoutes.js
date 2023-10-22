const { Router } = require('express');
const { singup } = require('./controllers/singup')
const { singin } = require('./controllers/singin')


const authRoutes = Router();

authRoutes.post("/singup", singup)
authRoutes.post("/singin", singin)



module.exports = authRoutes;