const { Router } = require('express');
const dataloadRoutes = require ('../service/dataloadRoutes')
const authRoutes = require ('./Auth/authRoutes')
const diaryDateRoutes = require ('./Diary/diaryDateRoutes')
const planificationDaysRoutes = require ('./Planification/planificationDaysRoutes')
const recipesRoutes = require ('./Recipes/recipesRoutes')
const ingredientsRoutes = require ('./Ingredients/ingredientsRoutes')
const mealsRoutes = require ('./Meals/mealsRoutes')

const {verifyToken} = require ('../middleware/verifyToken')




const router = Router();
router.use('/dataload', dataloadRoutes)
router.use('/auth', authRoutes)


// router.use('/diaryDate', verifyToken, diaryDateRoutes)
router.use('/diaryDate', diaryDateRoutes)
router.use('/planificationDays', planificationDaysRoutes)

router.use('/recipes', recipesRoutes)
router.use('/ingredients', ingredientsRoutes)

router.use('/meals', mealsRoutes)
module.exports = router;
