import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import Link from 'react-router-dom'
import {getDays} from '../redux/actions'

function Home() {
 
  let dispatch = useDispatch() 
  useEffect(()=>{
    dispatch(getDays())
  },[dispatch])
  return (
    <>
    <h1>que onda way</h1>
    {/* {semana.map(dia=>)}
      <button>{data.dia}</button>
      <Link>{data.almuerzo}</Link>
      <Link>{data.cena}</Link>
      <Link>{data.extra}</Link> */}
      
    </>
  )
}

export default Home;