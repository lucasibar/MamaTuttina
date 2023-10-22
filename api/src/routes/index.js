const { Router } = require('express');
const dataloadRoutes = require ('../service/dataloadRoutes')
const authRoutes = require ('./Auth/authRoutes')
const diaryDateRoutes = require ('./Diary/diaryDateRoutes')
const planificationDaysRoutes = require ('./Planification/planificationDaysRoutes')
const {verifyToken} = require ('../middleware/verifyToken')

// const recipesRoutes = require ('./Recipes/recipesRoutes')
// const ingredientsRoutes = require ('./Ingredients/ingredientsRoutes')





const router = Router();
router.use('/dataload', dataloadRoutes)
router.use('/auth', authRoutes)


router.use('/diaryDate', verifyToken, diaryDateRoutes)
router.use('/planificationDays', planificationDaysRoutes)

// router.use('/recipes', recipesRoutes)
// router.use('/ingredients', ingredientsRoutes)


module.exports = router;
