import React from 'react'
import MealHandler from './MealHandler/MealHandler'


function DayHandlers({day, extraIngredients, lunchIngredients, dinnerIngredients}) {

   return (
    <>
      <MealHandler mealName='Almuerzo' ingredientsGrms={lunchIngredients} recipes={day.lunchRecipes} ingredients={day.lunchIngredients}/>
      <MealHandler mealName='Cena' ingredientsGrms={dinnerIngredients} recipes={day.dinnerRecipes} ingredients={day.dinnerIngredients}/>
      <MealHandler mealName='Extra' ingredientsGrms={extraIngredients} recipes={day.extraRecipes} ingredients={day.extraIngredients}/>
    </>
   )
}

export default DayHandlers;
