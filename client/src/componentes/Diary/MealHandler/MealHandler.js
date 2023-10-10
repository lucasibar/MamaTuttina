import './MealHandler.css'
import * as React from 'react';

function MealHandler({mealName, recipe, sumKcal}) {

const kcalMeal = recipe.reduce((acc, ingredient) => {
  let kcal = (ingredient.kcal100gr / 100)* ingredient.RecipeIngredients.amount
  return acc + kcal
},0);

sumKcal(kcalMeal)
return (
  <>

      <div className='ingredient'>
      <h4>{mealName}</h4>
      <h4> {Math.round(kcalMeal)} kcal</h4>


      </div>
      {recipe.length>0 ? recipe.map((ingredient, i)=>
        <div key={i} >
          <p >{ingredient.name}</p>
          <p >{ingredient.RecipeIngredients.amount}{ingredient.RecipeIngredients.unit}</p>
        </div>
      ):null}


      {/* <div className='handlers'>
        <InputFoodHandler />
      </div> */}
    </>
  )
}

export default MealHandler;