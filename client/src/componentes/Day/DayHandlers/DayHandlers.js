import React from 'react'
import { useSelector } from 'react-redux';
import MealHandler from './MealHandler/MealHandler'


function DayHandlers({day}) {
   const actualDay = useSelector(state=> state.actualDay)

   return (
    <>
      <MealHandler mealName='Almuerzo' recipes={day.lunchRecipes} ingredients={day.lunchIngredients}/>
      <MealHandler mealName='Cena' recipes={day.dinnerRecipes} ingredients={day.dinnerIngredients}/>
      <MealHandler mealName='Extra' recipes={day.extraRecipes} ingredients={day.extraIngredients}/>
    </>
   )
}

export default DayHandlers;
