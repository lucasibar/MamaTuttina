import IngredientsList from './IngredientsList/IngredientsList'
import RecipesList from './RecipesList/RecipesList'
import InputFoodHandler from './InputFoodHandler/InputFoodHandler'
import './MealHandler.css'
import * as React from 'react';
import{useState, useEffect} from 'react'



function MealHandler({dayId, mealName, mealRecipes, mealIngredients}) {
  const [meal, setMeal] = useState('')

  useEffect(()=>{
    if(mealName==='Almuerzo')setMeal({meal:'lunch'})
    if(mealName==='Cena')setMeal({meal:'dinner'})
    if(mealName==='Extra')setMeal({meal:'extra'})
  },[mealName])
  
  return (
    <>

      <h4 className='mealTitle'>{mealName}</h4>

      <RecipesList mealRecipes={mealRecipes}/>
      <IngredientsList mealIngredients={mealIngredients}/>
      <div className='handlers'>
        <InputFoodHandler dayId={dayId} meal={meal} mealRecipes={mealRecipes} mealIngredients={mealIngredients}/>
      </div>
    </>
  )
}

export default MealHandler;