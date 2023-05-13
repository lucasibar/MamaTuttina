import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'react-router-dom'
import {getDays} from '../redux/actions'

function Home() {
 
  let dispatch = useDispatch() 
  useEffect(()=>{
    dispatch(getDays())
  },[dispatch])
  const allDays = useSelector(state=> state.days)
  
  const clickOnDay= (id)=>{

  }
  
  return (
    <>
    <h1>que onda way</h1>
   {allDays?.map(d=>(
    <div>
      <button onClick={clickOnDay(d.id)}>{d.day}</button>
      {/* <div id={d.id} style={{display: }}>
      </div> */}
    </div>
   ))}
    </>
  )
}

export default Home;