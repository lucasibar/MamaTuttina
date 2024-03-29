import './MealHandler.css'
import * as React from 'react';
import { useEffect, useState } from 'react'
import RecipeHandler from "../../RecipeHandler/RecipeHandler"
import IngredientHandler from "../../IngredientHandler/IngredientHandler"
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

function MealHandler({mealName, recipes, ingredients, mealId }) {
  const [totalKcalMeal, setTotalKcalMeal] = useState(0)

  useEffect(()=>{
    setTotalKcalMeal(0)
  },[recipes, ingredients])

  useEffect(()=>{
    const kCalRecipes = recipes[0]?.Ingredients?.reduce((acc, ingredient) => {
      return acc + (ingredient.kcal100gr/100 * ingredient.amount)
    },0);
    const kCalIngredients =ingredients?.reduce((acc, ingredient) => {
      return acc + (ingredient.kcal100gr/100 * ingredient.amount)
    },0);


    if(kCalRecipes)setTotalKcalMeal(prevState=> prevState + kCalRecipes)
    if(kCalIngredients)setTotalKcalMeal(prevState=> prevState + kCalIngredients)

  },[recipes, ingredients])

return (
  <>

      <div className='mealtitle'>
      <h4>{mealName}</h4>
      <h4> {Math.round(totalKcalMeal)||0} kcal</h4>

      </div>
      {recipes.length>0 ? recipes.map((recipe, i)=>
      <RecipeHandler key={i} title={mealName} mealId={mealId} recipe= {recipe}/>
      ):null}

      {ingredients.length>0 ? ingredients.map((ingredient, i)=>
        <IngredientHandler key={i} ingredient={ingredient}/>
      ):null}


      <div className='handlers'>
        <Button variant="text" style={{      
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
          marginLeft: '10px',
          }}
        >
        <NavLink to="/">
        AGREGAR ALIMENTO
        </NavLink>
        </Button>
      </div>
    </>
  )
}

export default MealHandler;