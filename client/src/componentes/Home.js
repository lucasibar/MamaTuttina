import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getDays} from '../redux/actions'
import Day from './Week/Day';
// import NavBar from './NavBar';

function Home() {
 
  let dispatch = useDispatch() 
  useEffect(()=>{
    dispatch(getDays())
  },[dispatch])
  const fullWeek = useSelector(state=> state.fullWeek)
  
  return (
    <>
    {/* <NavBar/> */}
   {fullWeek?.map(d=>(
    <Day day={d} key={d.day}/>
   ))}
    </>
  )
}

export default Home;