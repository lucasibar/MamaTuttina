import React, { useEffect, useState } from 'react'
import './Day.css'
import MealHandler from './MealHandler'
import { useSelector } from 'react-redux';

function Day({id}) {
  const actualDay = useSelector(state=> state.actualDay)
  // const objective  = useSelector(state=> state.objective)
  
  
  // const [objective, setObjective]= useState(0)
  const [kcalTotalDay, setKcalTotalDay]= useState(0)
  const [recipesMeal, setRecipes]= useState([])
  const [ingredientsMeal, setIngredients]= useState([])
  const [kCalTotal, setKCalTotal] =useState(0)

  useEffect(()=>{
    // if(actualDay){
    //   const recipes = actualDay.Recipes
    //   const ingredients = meal.Ingredients
    //   recipes && setRecipes(...recipes)
    //   ingredients?.length>0 && setIngredients(...ingredients)
      
    //   //calculo todas las calorias que tiene la parte de recetas de esta comida
    //   const kCalRecipes = recipes?.map((recipe, index)=>{
    //     const kCalRecipe = recipe.Ingredients.reduce((acc, ingredient)=> {
    //       let kcalGramIngredient = ingredient.kcla100gr / 100 
    //       let gramsIngredient = ingredient.RecipeIngredients.amount
    //       let kcalIngredientPerRecipe = kcalGramIngredient * gramsIngredient
    //       return acc+kcalIngredientPerRecipe
    //     },0)
    //     return kCalRecipe
    //   }).reduce((acc, kCalRecipe)=>acc+kCalRecipe,0)
    
    //   //calculo todas las calorias que tiene la parte de ingredientes relacionados directamente con esta comida
    //   const kCalIngredients = ingredients?.reduce((acc, ingredient)=> {
    //     let kcalGramIngredient = ingredient.kcla100gr / 100 
    //     let gramsIngredient = 0
    //     if(mealName==='Almuerzo') gramsIngredient = ingredient.RecipeIngredients?.amount
    //     if(mealName==='Cena') gramsIngredient = ingredient.DinnerIngredients?.amount
    //     if(mealName==='Extra') gramsIngredient = ingredient.ExtraIngredients?.amount
    //     let kcalIngredientPerRecipe = kcalGramIngredient * gramsIngredient ||0
    //     return acc+kcalIngredientPerRecipe
    //   },0)
    //   setKCalTotal(kCalRecipes + kCalIngredients)
    // }else{
    //   setKCalTotal(0)
    // }

  },[actualDay])

  return (
    <div style={{ backgroundColor: '#f2f2f2', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' }}>
      <div className='dayChange'>
        <button className='dayBeforeBotton'>{'<'}</button>
        <p className='titleDay'>{actualDay.day}</p>
        <button className='dayAfterBotton'>{'>'}</button>
      </div>

      <div className='objetives'>
        <p >Objetivos</p>
        <div className='objetivesAnalisis' >
        <p>Objetivo</p>
        <p>Restante</p>
        <p>Consumido</p>
        <p>Resultado</p>
        </div>
      </div>

      {/* <MealHandler mealName='Almuerzo'  />
      <MealHandler mealName='Cena'  />
      <MealHandler mealName='Extra' /> */}
      <div>
        <div className='meal'>
          <p >Ejercicio</p>
          <p >kcal quemadas</p>
        </div>
        <div className='handlers'>
          <button>Añadir ejercicio</button>
          <button>generar rutina</button>
        </div>
      </div>

    </div>
  )
}

export default Day;


