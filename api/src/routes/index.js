const { Router } = require('express');
const dataloadRoutes = require ('./service/dataloadRoutes')
const daysRoutes = require ('./rutasPrincipales/daysRoutes')
const recipesRoutes = require ('./rutasPrincipales/recipesRoutes')

var morgan = require('morgan')

const router = Router();

router.use(morgan('tiny'))

router.use('/dataload', dataloadRoutes)
router.use('/days', daysRoutes)
router.use('/recipes', recipesRoutes)


module.exports = router;
