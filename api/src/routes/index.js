const { Router } = require('express');
const dataloadRoutes = require ('./service/dataloadRoutes')
const daysRoutes = require ('./rutasPrincipales/daysRoutes')
const recipesRoutes = require ('./rutasPrincipales/recipesRoutes')
const mealsRoutes = require ('./rutasPrincipales/mealsRoutes')

// var morgan = require('morgan')
// router.use(morgan('tiny'))

const router = Router();
router.use('/dataload', dataloadRoutes)


router.use('/days', daysRoutes)
router.use('/recipes', recipesRoutes)
router.use('/meal', mealsRoutes)


module.exports = router;
