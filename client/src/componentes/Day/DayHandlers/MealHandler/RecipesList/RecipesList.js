import React, {useState, useEffect} from 'react'
import './RecipesList.css'


function RecipesList({mealRecipes}) {


   return (
    <>
      {mealRecipes?.map((recipe, i)=>{
        return(
          <div key={i} className='recipe'>
          <p >{recipe.name}</p>
          <p>kcal = {recipe.Ingredients.reduce((acc, ingredient)=>{
            return (ingredient.kcal100gr/100) * (ingredient.RecipeIngredients.amount)
          },0)}</p>
          </div>
        )
      })}
    </>
   )
}

export default RecipesList;