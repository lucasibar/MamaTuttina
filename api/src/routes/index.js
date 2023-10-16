const { Router } = require('express');
const dataloadRoutes = require ('../service/dataloadRoutes')

const diaryDateRoutes = require ('./Diary/diaryDateRoutes')
const planificationDaysRoutes = require ('./Planification/planificationDaysRoutes')

// const recipesRoutes = require ('./Recipes/recipesRoutes')
// const ingredientsRoutes = require ('./Ingredients/ingredientsRoutes')





const router = Router();
router.use('/dataload', dataloadRoutes)

router.use('/diaryDate', diaryDateRoutes)
router.use('/planificationDays', planificationDaysRoutes)

// router.use('/recipes', recipesRoutes)
// router.use('/ingredients', ingredientsRoutes)


module.exports = router;
