import './MealHandler.css'
import * as React from 'react';
import { useEffect, useState } from 'react'
import InputFoodHandler from "./InputFoodHandler/InputFoodHandler"

function MealHandler({mealName, recipe, sumKcal}) {
  const [kcal, setKcal] = useState(0)
  
  useEffect(() => {
  const kcalMeal = recipe.reduce((acc, ingredient) => {
    let kcal = (ingredient.kcal100gr / 100)* ingredient.RecipeIngredients.amount
    return acc + kcal
  },0);
  setKcal( kcalMeal);
  sumKcal( kcalMeal);
  }, [recipe]);

return (
  <>

      <div className='ingredient'>
      <h4>{mealName}</h4>
      <h4> {Math.round(kcal)} kcal</h4>


      </div>
      {recipe.length>0 ? recipe.map((ingredient, i)=>
        <div key={i} >
          <p >{ingredient.name}</p>
          <p >{ingredient.RecipeIngredients.amount}{ingredient.RecipeIngredients.unit}</p>
        </div>
      ):null}


      <div className='handlers'>
        <InputFoodHandler />
      </div>
    </>
  )
}

export default MealHandler;