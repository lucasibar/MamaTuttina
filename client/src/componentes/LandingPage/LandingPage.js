import * as React from 'react';
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import {useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import './LandingPage.css'


export default function LandingPage() {
  // let dispatch = useDispatch() 
  // useEffect(()=>{
  //   // dispatch(getIngredients())
  //   // dispatch(getRecipes())
  // },[dispatch])
  const user = useSelector(state=> state.user)
  return (

    <div className='landingPage'>
    
        <NavLink to={!user? '/signin' : '/signup'}>
            <h1>MAMA TUTTINA</h1>
        </NavLink>
    </div>
  );
}


