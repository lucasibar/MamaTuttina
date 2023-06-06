import React from 'react'
import './IngredientsList.css'

function IngredientsList({mealIngredients}) {

  return (
    <>
    {mealIngredients?.map((ingredient, i)=>{
      return(
        <div key={i} className='ingredient'>
        <p >{ingredient.name}</p>
        <p>kcal = {(ingredient.kcal100gr/100) * (ingredient.amountIngredientDay.amount)}</p>
        </div>
      )
    })}
  </>
   )
}

export default IngredientsList;