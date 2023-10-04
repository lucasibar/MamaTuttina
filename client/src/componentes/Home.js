import * as React from 'react';
import { useEffect } from 'react'
import { useDispatch} from 'react-redux';
import '../componentes/Day/Day.css'
import Recipe from './Recipe/Recipe'

import {getIngredients, getRecipes} from '../redux/actions'


export default function Home() {
  let dispatch = useDispatch() 
  useEffect(()=>{
    dispatch(getIngredients())
    dispatch(getRecipes())
  },[dispatch])
  
  return (
  <>
    <div style={{ backgroundColor: '#f2f2f2', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%',   overflow: 'auto'}}>
    <h1>0</h1>
      <Recipe />
    </div>


  </>
  );
}



