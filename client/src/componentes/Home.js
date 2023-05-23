import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getDays} from '../redux/actions'
import Week from './Week/Week';


function Home() {
 
  let dispatch = useDispatch() 
  useEffect(()=>{
    dispatch(getDays())
  },[dispatch])
  const fullWeek = useSelector(state=> state.fullWeek)
  
  return (
    <>

   {fullWeek?.map(d=>(
    <Week day={d} key={d.day}/>
   ))}
    </>
  )
}

export default Home;