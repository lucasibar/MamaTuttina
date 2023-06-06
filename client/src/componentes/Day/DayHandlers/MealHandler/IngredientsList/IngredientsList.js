import React from 'react'
import './IngredientsList.css'

function IngredientsList({mealIngredients}) {
// console.log(mealIngredients)
  return (
    <>
    {mealIngredients?.map((ingredient, i)=>{
      return(
        <div key={i} className='ingredient'>
        <p >{ingredient.name}</p>
        <p>{(ingredient.kcal100gr/100) * (ingredient.amountIngredientDay.amount)} kcal </p>
        </div>
      )
    })}
  </>
   )
}

export default IngredientsList;