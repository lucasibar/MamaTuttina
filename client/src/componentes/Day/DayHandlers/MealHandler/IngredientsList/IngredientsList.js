import React, {useState} from 'react'
import './IngredientsList.css'



function IngredientsList({mealIngredients}) {
const [ enableBotons, setEnableBotons ]= useState(false)
  return (
    <>
    {mealIngredients?.map((ingredient, i)=>{
      return(
        <div key={i} className='ingredient'>
        <p >{ingredient.name}</p>
        <button onClick={()=> setEnableBotons(!enableBotons)}>
        {enableBotons?
        <p>{(ingredient.kcal100gr/100) * (ingredient.amountIngredientDay.amount)} kcal </p>
        : 

        {/* <IngredientButton /> */}
        }
        </button>
        </div>
      )
    })}
  </>
   )
}

export default IngredientsList;