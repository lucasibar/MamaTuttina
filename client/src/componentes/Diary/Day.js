import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getDayRecipes} from '../../redux/actions'
import './Day.css'
import DayPagination from './DayPagination/DayPagination';
import Objetives from './Objetives/Objetives'
import Exercise from './Exercise/Exercise'
import MealHandler from './MealHandler/MealHandler'


function Day(props) {
  const {dayId, dayName}= props.match.params
  let dispatch = useDispatch() 
  useEffect(()=>{
    dispatch(getDayRecipes(dayId))
    // dispatch(getIngredients())
  },[dispatch,dayId])
  
  const dayRecipes = useSelector(state=> state.dayRecipes)
  
  const [totalKcalDay, setTotalKcalDay] = useState(0)
  
  // const sumKcal = (kcalMeal)=>{
  //   setTotalKcalDay(totalKcalDay + kcalMeal)
  // }
console.log(totalKcalDay)
return (
    <div style={{ backgroundColor: '#f2f2f2', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%',   overflow: 'auto'}}>
      <DayPagination day={dayName}/>
      <Objetives />
      {dayRecipes?.map((meal, i)=>
      <MealHandler key={i} mealName={meal.meal} recipe={meal.recipe[0].Ingredients||[]} sumKcal={sumKcal}/>
      )}
      <Exercise/>
    </div>
  )
}

export default Day;


