import IngredientsList from './IngredientsList/IngredientsList'
import RecipesList from './RecipesList/RecipesList'
import InputFoodHandler from './InputFoodHandler/InputFoodHandler'
import './MealHandler.css'
import * as React from 'react';
import{useState, useEffect} from 'react'



function MealHandler({dayId, mealName, mealRecipes, mealIngredients}) {
  const [meal, setMeal] = useState('')

  useEffect(()=>{
    if(mealName==='Almuerzo')setMeal('lunch')
    if(mealName==='Cena')setMeal('dinner')
    if(mealName==='Extra')setMeal('extra')
  },[mealName])
  
  return (
    <>

      <div className='ingredient'><h4>{mealName}</h4></div>

      <RecipesList mealRecipes={mealRecipes}/>
      <IngredientsList mealIngredients={mealIngredients}/>
      <div className='handlers'>
        <InputFoodHandler dayId={dayId} meal={meal} mealRecipes={mealRecipes} mealIngredients={mealIngredients}/>
      </div>
    </>
  )
}

export default MealHandler;