import React from 'react'
import { useSelector } from 'react-redux';
import MealHandler from './MealHandler/MealHandler'


function DayHandlers() {
   const actualDay = useSelector(state=> state.actualDay)
   return (
    <>
      <MealHandler mealName='Almuerzo' dayId={actualDay?.id || 0} mealRecipes={actualDay?.lunchRecipes}  mealIngredients={actualDay?.lunchIngredients} />
      <MealHandler mealName='Cena' dayId={actualDay?.id || 0} mealRecipes={actualDay?.dinnerRecipes}  mealIngredients={actualDay?.dinnerIngredients} />
      <MealHandler mealName='Extra' dayId={actualDay?.id || 0} mealRecipes={actualDay?.extraRecipes}  mealIngredients={actualDay?.extraIngredients} />
    </>
   )
}

export default DayHandlers;
