import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import './Objetives.css'

// import { useSelector } from 'react-redux';
// import kcalXingredient from '../../../utils/kcalXingredient'

export default function Objetives({dayMealsDiary}) {
  const objetiveKcal = useSelector(state=> state.objetive)

  const [parameters, setParameters] =useState({
    totalKcalDay: 0,
    carbs:0,
    prot:0,
    fat:0

  })


  useEffect(()=>{
    const ingredietsPerMeal = dayMealsDiary?.map(meal=>{
      if(meal.Recipe){

        let recipesIngredients = meal.Recipes[0]?.Ingredients
        return [...meal.Ingredients, ...recipesIngredients]
      }else{
        return []
      }
    })

    let ingredients = ingredietsPerMeal.flat();

    if(ingredients && ingredients.length>0) ingredients.map(ingredient=>{
      setParameters(prevState=> {
        return {totalKcalDay: prevState.totalKcalDay + ingredient.kcal100gr/100*ingredient.amount,
        carbs: prevState.carbs + ingredient.carbs,
        prot: prevState.prot + ingredient.proteins,
        fat: prevState.fat + ingredient.fats}
      })
      return ingredient
    })


  },[dayMealsDiary])


  return (
    <div className='parameters'>
        {parameters.totalKcalDay<objetiveKcal?
        <div > 

        <h3 >{Math.round(objetiveKcal-parameters.totalKcalDay)}</h3>
        <h6 className='subtitleParameters'> Faltan <br/>kcal</h6>
        </div>
        :
        <div > 

        <h3 >{Math.round(-(objetiveKcal-parameters.totalKcalDay))}</h3>
        <h6 className='subtitleParameters'>Sobran <br/>kcal</h6>
        </div>
        }

        
        <div className='macroNutrients'> 
          <h3 >{Math.round(parameters.fat/parameters.totalKcalDay*100)||0}%</h3>
          <h6 className='subtitleParameters'>grasas 
          <br/>
          20% ideal</h6>
        </div>

        <div className='macroNutrients'> 
          <h3 >{Math.round(parameters.carbs/parameters.totalKcalDay*100)||0}%</h3>
          <h6 className='subtitleParameters'>carbohidratos  <br/> 50% ideal</h6>
        </div>
        <div className='macroNutrients'> 
          <h3 >{Math.round(parameters.prot/parameters.totalKcalDay*100)||0}%</h3>
          <h6 className='subtitleParameters'>proteinas  <br/> 30% ideal</h6>
        </div>
    </div>

  );
}