const { Router } = require('express');
const razaRoutes = require ('./razaRoutes')
const temperamentoRoutes = require ('./temperamentoRoutes')
const searchRoutes = require ('./searchRoutes')
var morgan = require('morgan')
const router = Router();

router.use(morgan('tiny'))

router.use('/dogs', razaRoutes)
router.use('/temperaments', temperamentoRoutes)
router.use('/search', searchRoutes)


module.exports = router;
