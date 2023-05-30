import React, { useEffect, useState } from 'react'
import './MealHandler.css'


function MealHandler({mealName, meal}) {
  const [recipesMeal, setRecipes]= useState([])
  const [ingredientsMeal, setIngredients]= useState([])
  const [kCalTotal, setKCalTotal] =useState(0)
console.log("LINEA 9 MEALHANDLER ", recipesMeal,ingredientsMeal )
  useEffect(()=>{
    if(meal){
      const recipes = meal.Recipes
      const ingredients = meal.Ingredients
      setRecipes(...recipes)
      setIngredients(...ingredients)
      
      //calculo todas las calorias que tiene la parte de recetas de esta comida
      const kCalRecipes = recipes?.map((recipe, index)=>{
        const kCalRecipe = recipe.Ingredients.reduce((acc, ingredient)=> {
          let kcalGramIngredient = ingredient.kcla100gr / 100 
          let gramsIngredient = ingredient.RecipeIngredients.amount
          let kcalIngredientPerRecipe = kcalGramIngredient * gramsIngredient
          return acc+kcalIngredientPerRecipe
        },0)
        return kCalRecipe
      }).reduce((acc, kCalRecipe)=>acc+kCalRecipe,0)
    
      //calculo todas las calorias que tiene la parte de ingredientes relacionados directamente con esta comida
      const kCalIngredients = ingredients?.reduce((acc, ingredient)=> {
        let kcalGramIngredient = ingredient.kcla100gr / 100 
        let gramsIngredient = 0
        if(mealName==='Almuerzo') gramsIngredient = ingredient.RecipeIngredients?.amount
        if(mealName==='Cena') gramsIngredient = ingredient.DinnerIngredients?.amount
        if(mealName==='Extra') gramsIngredient = ingredient.ExtraIngredients?.amount
        let kcalIngredientPerRecipe = kcalGramIngredient * gramsIngredient ||0
        return acc+kcalIngredientPerRecipe
      },0)
      setKCalTotal(kCalRecipes + kCalIngredients)
    }else{
      setKCalTotal(0)
    }

  },[meal, mealName, recipesMeal, ingredientsMeal])

  return (
    <>
      <div className='meal'>
        <p >{mealName}</p>
        <p >{kCalTotal}</p>
      </div>
      
      <div>
      {/* {recipesMeal?.map((recipe, index)=>(
        <div className='meal' key={index}>
          <p>{recipe.name}</p>
          <p>{recipe.name}</p>
        </div>
        
      ))} */}
      {/* {ingredientsMeal?.map((ingredient, index) => (
        <div className='meal' key={index}>
          <h1>{ingredient.name}</h1>
          <p>{ingredient.name}</p>
        </div>
      ))}  */}

      </div>

      <div className='handlers'>
        <button>Añadir alimento</button>
        <button>generar receta</button>
      </div>
    </>
  )
}

export default MealHandler;