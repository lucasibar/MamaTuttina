import * as React from 'react';
import {useEffect} from 'react'
import Recipe from './Recipe';
import sumCaloriesRecipe from '../../utils/sumCaloriesRecipe'


export default function RecipeConteiner({lunch, dinner, extra, sumCalories}) {
  
  const caloriesLunch = lunch? sumCaloriesRecipe(lunch): 0 
  const caloriesDinner = dinner? sumCaloriesRecipe(dinner):0
  const caloriesExtra = extra? sumCaloriesRecipe(extra) : 0
  useEffect(()=>{
    sumCalories('lunch', caloriesLunch)
    sumCalories('dinner', caloriesDinner)
    sumCalories('extra', caloriesExtra)
  },[caloriesLunch, caloriesDinner, caloriesExtra, sumCalories])

  return (
    <>
      {lunch? <Recipe recipe={lunch} kclaRecipe={caloriesLunch}/>: <><h1>agregar almuerzo</h1> <br/></>}
      {lunch? <Recipe recipe={dinner} kclaRecipe={caloriesDinner}/>: <><h1>agregar almuerzo</h1> <br/></>}
      {lunch? <Recipe recipe={extra} kclaRecipe={caloriesExtra}/>: <><h1>agregar almuerzo</h1> <br/></>}
    </>
  );
}