const { Router } = require('express');
const dataloadRoutes = require ('./service/dataloadRoutes')
const daysRoutes = require ('./rutasPrincipales/daysRoutes')
const recipesRoutes = require ('./rutasPrincipales/recipesRoutes')

// var morgan = require('morgan')
// router.use(morgan('tiny'))

const router = Router();
router.use('/dataload', dataloadRoutes)


router.use('/days', daysRoutes)
router.use('/recipes', recipesRoutes)


module.exports = router;
