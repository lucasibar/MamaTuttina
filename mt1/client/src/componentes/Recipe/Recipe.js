import React, { useEffect } from 'react'
import './Recipe.css'
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import InputPrueba from './InputPrueba'


function Recipe(props) {
  const recipes = useSelector(state=> state.recipes)
  const ingredients = useSelector(state=> state.ingredients)
  


  return (
    <div style={{ backgroundColor: '#f2f2f2', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%',   overflow: 'auto'}}>   
      <h1>0</h1>

      <div className='ingredient'>
        <h4>Nueva receta</h4>
        <h4> 1 porcion</h4>
      </div>

      <div className='recipe'>
        <p >Banana</p>
        <p >1 </p>    
      </div>
      
      <InputPrueba ingredients={ingredients} recipes={recipes}/>
      
    </div>
  )
}

export default Recipe;