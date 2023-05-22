import * as React from 'react';
import {useEffect} from 'react'
import Recipe from './Recipe';
import sumCaloriesRecipe from '../../utils/sumCaloriesRecipe'


export default function RecipeConteiner({lunch, dinner, extra, sumCalories}) {
  const caloriesLunch = sumCaloriesRecipe(lunch)
  const caloriesDinner = sumCaloriesRecipe(dinner)
  const caloriesExtra = sumCaloriesRecipe(extra)
  
  useEffect(()=>{
    sumCalories('lunch', caloriesLunch)
    sumCalories('dinner', caloriesDinner)
    sumCalories('extra', caloriesExtra)
  },[caloriesLunch, caloriesDinner, caloriesExtra, sumCalories])

  return (
    <>
      <Recipe recipe={lunch}/>
      <Recipe recipe={dinner}/>
      <Recipe recipe={extra}/>
    </>
  );
}