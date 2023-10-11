const { Router } = require('express');
const dataloadRoutes = require ('../service/dataloadRoutes')
const daysRoutes = require ('./rutasPrincipales/daysRoutes')
// const recipesRoutes = require ('./rutasPrincipales/recipesRoutes')
const ingredientsRoutes = require ('./rutasPrincipales/ingredientsRoutes')
// const purchasesRoutes = require ('./rutasPrincipales/purchasesRoutes')

// var morgan = require('morgan')
// router.use(morgan('tiny'))

const router = Router();
router.use('/dataload', dataloadRoutes)

router.use('/days', daysRoutes)
// router.use('/recipes', recipesRoutes)
router.use('/ingredients', ingredientsRoutes)
// router.use('/purchases', purchasesRoutes)

module.exports = router;
