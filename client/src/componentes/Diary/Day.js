import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getDiaryDay, getIngredients} from '../../redux/actions'
import './Day.css'
import DayPagination from './DayPagination/DayPagination';
import Objetives from './Objetives/Objetives'
import Exercise from './Exercise/Exercise'
import MealHandler from './MealHandler/MealHandler'


function Day(props) {
  const today = useSelector(state=> state.today)

  const [mealsDiary, setMealsDiary] = useState()
  const dayMealsDiary = useSelector(state=> state.dayMealsDiary)

  let dispatch = useDispatch() 
  useEffect(()=>{
    dispatch(getDiaryDay(today))
  },[dispatch, today])
  


return (
    <div style={{ backgroundColor: '#f2f2f2', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%',   overflow: 'auto'}}>
      <DayPagination day={today}/>
      <Objetives dayMealsDiary={dayMealsDiary}/>
      {dayMealsDiary?.map((meal, i)=>
      <MealHandler key={i} mealName={meal.mealName} recipes={meal.Recipes} ingredients={meal.Ingredients}/>
      )}
      {/* <Exercise/> */}
    </div>
  )
}

export default Day;


