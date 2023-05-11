const { Router } = require('express');
const daysRoutes = require ('./daysRoutes')
var morgan = require('morgan')

const router = Router();

router.use(morgan('tiny'))

router.use('/days', daysRoutes)



module.exports = router;
