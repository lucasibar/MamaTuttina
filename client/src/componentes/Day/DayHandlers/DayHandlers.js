import React from 'react'
import { useSelector } from 'react-redux';
import MealHandler from './MealHandler/MealHandler'


function DayHandlers(props) {
   const actualDay = useSelector(state=> state.actualDay)
   return (
    <>
      <MealHandler mealName='Almuerzo' mealRecipes={actualDay.lunchRecipes}  mealIngredients={actualDay.lunchIngredients} />
      <MealHandler mealName='Cena' mealRecipes={actualDay.dinnerRecipes}  mealIngredients={actualDay.dinnerIngredients} />
      <MealHandler mealName='Extra' mealRecipes={actualDay.extraRecipes}  mealIngredients={actualDay.extraIngredients} />
    </>
   )
}

export default DayHandlers;
