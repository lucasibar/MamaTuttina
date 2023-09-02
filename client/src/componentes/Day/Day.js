import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Day.css'
import DayPagination from './DayPagination/DayPagination';
import DayHandlers from './DayHandlers/DayHandlers'
import Objetives from './Objetives/Objetives'
import Exercise from './Exercise/Exercise'
import {getWeek, getDay, getIngredients, getRecipes} from '../../redux/actions'


function Day(props) {
      //**TODO ESTO HAY QUE UNIRLO EN UNO SOLO */
  const actualDay = useSelector(state=> state.actualDay)
  const day = useSelector(state=> state.day)
  const ingredients = useSelector(state=> state.ingredients)
  const recipes = useSelector(state=> state.recipes)
 
  let dispatch = useDispatch() 
  useEffect(()=>{
    //**TODO ESTO HAY QUE UNIRLO EN UNO SOLO */
    dispatch(getWeek())
    dispatch(getDay())
    dispatch(getIngredients())
    dispatch(getRecipes())
  },[dispatch])
  

//-------------------------------------------------------------------------------------------------------------------

//----EJERCICIO DE LOGICA---------------------------------------------------------------------------------------------------------------
// quiero que de "day" que va a venir con almuerzo, cena y extras
//  cada uno de ellos con sus respectivos ingredientes y recetas se matcheen con los arrays de recipes e ingredients
//  y aquen el total de las calorias por comida
// yo lo hago asi nomas pero estaria bueno ver denuevo la clase y mejorar esta parte
// console.log(recipes)
// console.log(day)

const {dinnerIngredients, dinnerRecipes, extraIngredients, extraRecipes, lunchIngredients, lunchRecipes} = day

//PONIENDO LAS RECETAS FORMATO ARRAY INGREDIENTES
const dinnerRecipesIngredients = dinnerRecipes?.reduce((acc, recipe)=>{
if(recipe.ingredients.length>0) return acc.concat(recipe.ingredients)
},[])



const extraRecipesIngredients = extraRecipes?.reduce((acc, recipe)=>{
if(recipe.ingredients.length>0) return acc.concat(recipe.ingredients)
},[])
const lunchRecipesIngredients = lunchRecipes?.reduce((acc, recipe)=>{
if(recipe.ingredients.length>0) return acc.concat(recipe.ingredients)
},[])
const KcalLunchRecipes = lunchRecipesIngredients?.map(e=>{
  let KcalIngredient = ingredients?.filter(ingredient=> ingredient.nameIngredient ===e.nameIngredient)
  console.log(KcalIngredient)
  // let ingredientsGrams = e.amount*dinnerRecipes?.portions
  // let KcalTotal = KcalIngredient.Kcal*ingredientsGrams
  // return KcalTotal
})
 console.log(KcalLunchRecipes)

FUCK YOUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU

//KCAL
// const KcaldinnerIngredients = dinnerIngredients?.reduce((acc, ingredient)=>{
//   let ingredientBDD= ingredients?.find(ingredient.nameIngredient)
//     return 1+acc
// },0) 
// const KcaldinnerRecipes = dinnerRecipesIngredients?.ingredients?.reduce((acc, ingredient)=>{
//   let ingredientBDD= ingredients?.find(ingredient.nameIngredient)
//    return 1 +acc
// },0) 
// const KcalextraIngredients = extraIngredients?.reduce((acc, ingredient)=>{
//   let ingredientBDD= ingredients?.find(ingredient.nameIngredient)
//    return 1 +acc
// },0) 
// const KcalextraRecipes = extraRecipesIngredients?.ingredients?.reduce((acc, ingredient)=>{
//   let ingredientBDD= ingredients?.find(ingredient.nameIngredient)
//   return 1+acc
// },0) 
// const KcallunchIngredients = lunchIngredients?.reduce((acc, ingredient)=>{
//   let ingredientBDD= ingredients?.find(ingredient.nameIngredient)
//     return 1+acc
// },0) 
// const KcallunchRecipes = lunchRecipesIngredients?.ingredients?.reduce((acc, ingredient)=>{
//   let ingredientBDD= ingredients?.find(ingredient.nameIngredient)
//     return 1+acc
// },0) 


//-------------------------------------------------------------------------------------------------------------------






  return (
    <div style={{ backgroundColor: '#f2f2f2', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%',   overflow: 'auto'}}>
      <DayPagination day={day.day}/>
      <Objetives/>
      <DayHandlers day={day}/>
      <Exercise/>
    </div>
  )
}

export default Day;


