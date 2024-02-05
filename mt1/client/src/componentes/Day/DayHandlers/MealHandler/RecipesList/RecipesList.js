import React from 'react'
import './RecipesList.css'


function RecipesList({recipes}) {
   return (
    <>
      {recipes?.map((recipe, i)=>{
        return(
          <div key={i} className='recipe'>
          <p >{recipe.name}</p>
          <p >{recipe.portions} </p>{/* aca tendrian que ir las personitas */}
          
          </div>
        )
      })}
    </>
   )
}

export default RecipesList;