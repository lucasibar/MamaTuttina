import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getDayRecipes} from '../../redux/actions'
import './Day.css'



function Day(props) {

  const dayId= props.match.params.id
  let dispatch = useDispatch() 
  useEffect(()=>{
    dispatch(getDayRecipes(dayId))
  },[dispatch,dayId])

  const day = useSelector(state=> state.day)



return (
    <div style={{ backgroundColor: '#f2f2f2', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%',   overflow: 'auto'}}>

    </div>
  )
}

export default Day;


