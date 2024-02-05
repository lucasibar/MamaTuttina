import React from 'react'
import './IngredientsList.css'



function IngredientsList({ingredients}) {
  return (
    <>
    {ingredients?.map((ingredient, i)=>{
      return(
        <div key={i} className='ingredient'>
          <p >{ingredient.nameIngredient}</p>
          <p >{ingredient.amount}grs</p>
        </div>
      )
    })}
  </>
   )
}

export default IngredientsList;