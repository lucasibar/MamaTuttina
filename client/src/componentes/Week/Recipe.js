import React from 'react'


function Recipe({recipe, kclaRecipe}) {

  
  return (
    <>
        <h3>{recipe.name}</h3>
        <h5>{kclaRecipe}</h5>
    </>
  )
}

export default Recipe;