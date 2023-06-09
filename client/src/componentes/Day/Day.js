import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Day.css'
import DayPagination from './DayPagination/DayPagination';
import DayHandlers from './DayHandlers/DayHandlers'
import Objetives from './Objetives/Objetives'
import Exercise from './Exercise/Exercise'
import {getWeek} from '../../redux/actions'


function Day(props) {
  const stateActualDay = useSelector(state=> state.actualDay)
  const [actualDay, setActualDay]= useState([])
  useEffect(()=>{
    setActualDay(stateActualDay)
  },[stateActualDay])
  
  
  let dispatch = useDispatch() 
  useEffect(()=>{
    dispatch(getWeek())
  },[dispatch])
  
  return (
    <div style={{ backgroundColor: '#f2f2f2', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%',   overflow: 'auto'}}>
      <DayPagination day={actualDay? actualDay.day : 'Hoy'}/>
      <Objetives/>
      <DayHandlers/>
      <Exercise/>
    </div>
  )
}

export default Day;


