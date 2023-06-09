const { Router } = require('express');
const dataloadRoutes = require ('./service/dataloadRoutes')
const daysRoutes = require ('./rutasPrincipales/daysRoutes')
const recipesRoutes = require ('./rutasPrincipales/recipesRoutes')
const mealRoutes = require ('./rutasPrincipales/mealRoutes')
const ingredientsRoutes = require ('./rutasPrincipales/ingredientsRoutes')
const objetivesRoutes = require ('./rutasPrincipales/objetivesRoutes')

// var morgan = require('morgan')
// router.use(morgan('tiny'))

const router = Router();
router.use('/dataload', dataloadRoutes)


router.use('/days', daysRoutes)
router.use('/meal', mealRoutes)
router.use('/recipes', recipesRoutes)
router.use('/ingredients', ingredientsRoutes)
router.use('/objetives', objetivesRoutes)

module.exports = router;
