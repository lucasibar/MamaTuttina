import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Day.css'
import DayPagination from './DayPagination/DayPagination';
import DayHandlers from './DayHandlers/DayHandlers'
import Objetives from './Objetives/Objetives'
import Exercise from './Exercise/Exercise'
import {getWeek, getDay, getIngredients, getRecipes} from '../../redux/actions'


function Day(props) {
  
  let dispatch = useDispatch() 
  useEffect(()=>{
    //**TODO ESTO HAY QUE UNIRLO EN UNO SOLO */
    dispatch(getWeek())
    dispatch(getDay())
    dispatch(getIngredients())
    dispatch(getRecipes())
  },[dispatch])
  
  //**TODO ESTO HAY QUE UNIRLO EN UNO SOLO */
  const actualDay = useSelector(state=> state.actualDay)
  const day = useSelector(state=> state.day)
  const recipes = useSelector(state=> state.recipes)
  
//-------------------------------------------------------------------------------------------------------------------

//----EJERCICIO DE LOGICA---------------------------------------------------------------------------------------------------------------
// quiero que de "day" que va a venir con almuerzo, cena y extras
//  cada uno de ellos con sus respectivos ingredientes y recetas se matcheen con los arrays de recipes e ingredients
//  y aquen el total de las calorias por comida
// yo lo hago asi nomas pero estaria bueno ver denuevo la clase y mejorar esta parte
// console.log(recipes)
// console.log(day)
let dinnerIngredients=[]
let lunchIngredients=[]
let extraIngredients=[]
let dinnerRecipes = []
let extraRecipes = []
let lunchRecipes = []

if(day.day){

  //DINNER
  if(day.dinnerIngredients.length>0){
    dinnerIngredients  = [...dinnerIngredients, ...day.dinnerIngredients]
  }
  if(day.dinnerRecipes.length>0){
    const ingredientExtract = day.dinnerRecipes?.reduce((acc, recipe)=>{
      return acc.concat(recipe.ingredients)
    },[])
    dinnerRecipes= [...dinnerRecipes, ...ingredientExtract]
  }

  //EXTRA
  if(day.extraIngredients.length>0){
    extraIngredients  = [...extraIngredients, ...day.extraIngredients]
  }
  if(day.extraRecipes.length>0){
    const ingredientExtract = day.extraRecipes?.reduce((acc, recipe)=>{
      return acc.concat(recipe.ingredients)
    },[])
    extraRecipes= [...extraRecipes, ...ingredientExtract]
  }

  //LUNCH
  if(day.lunchIngredients.length>0){
    lunchIngredients  = [...lunchIngredients, ...day.lunchIngredients]
  }
  if(day.lunchRecipes.length>0){
    const ingredientExtract = day.lunchRecipes?.reduce((acc, recipe)=>{
      return acc.concat(recipe.ingredients)
    },[])
    lunchRecipes= [...lunchRecipes, ...ingredientExtract]
  }


}



//-------------------------------------------------------------------------------------------------------------------




const ingredientsList = [...dinnerIngredients, ...lunchIngredients, ...extraIngredients, ...dinnerRecipes, ...extraRecipes, ...lunchRecipes]
// console.log(dinnerIngredients)
// console.log(lunchIngredients)
// console.log(extraIngredients)
// console.log(dinnerRecipes)
// console.log(extraRecipes)
// console.log(lunchRecipes)
// console.log(ingredientsList)
  return (
    <div style={{ backgroundColor: '#f2f2f2', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%',   overflow: 'auto'}}>
      <DayPagination day={day.day}/>
      <Objetives ingredientsList={ingredientsList}/>
      <DayHandlers extraIngredients={[...extraIngredients, ...extraRecipes]} lunchIngredients={[...lunchIngredients, ...lunchRecipes]} dinnerIngredients={[...dinnerIngredients, ...dinnerRecipes]} day={day}/>
      <Exercise/>
    </div>
  )
}

export default Day;


