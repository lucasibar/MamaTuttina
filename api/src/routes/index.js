const { Router } = require('express');
const dataloadRoutes = require ('./service/dataloadRoutes')
const setInitialStateRoutes = require ('./rutasPrincipales/setInitialStateRoutes')
const daysRoutes = require ('./rutasPrincipales/daysRoutes')
const dayRoutes = require ('./rutasPrincipales/dayRoutes')
const recipesRoutes = require ('./rutasPrincipales/recipesRoutes')
const mealRoutes = require ('./rutasPrincipales/mealRoutes')
const ingredientsRoutes = require ('./rutasPrincipales/ingredientsRoutes')
const objetivesRoutes = require ('./rutasPrincipales/objetivesRoutes')
const purchasesRoutes = require ('./rutasPrincipales/purchasesRoutes')

// var morgan = require('morgan')
// router.use(morgan('tiny'))

const router = Router();
router.use('/dataload', dataloadRoutes)

router.use('/days', daysRoutes)
router.use('/day', dayRoutes)
router.use('/meal', mealRoutes)
router.use('/recipes', recipesRoutes)
router.use('/ingredients', ingredientsRoutes)
router.use('/objetives', objetivesRoutes)
router.use('/setInitialState', setInitialStateRoutes)
router.use('/purchases', purchasesRoutes)

module.exports = router;
