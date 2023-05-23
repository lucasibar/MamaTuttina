import React, { useEffect, useState } from 'react'
import './MealHandler.css'


function MealHandler({mealName, day}) {
  const [food, setFood] =useState([])
  
  useEffect(()=>{
    if(Object.keys(day).length === 0)setFood([])
    if(mealName==='Almuerzo'&& day.lunch) setFood(day.lunch.Ingredients)
    if(mealName==='Cena'&& day.dinner)setFood(day.dinner.Ingredients)
    if(mealName==='Extra'&& day.extra)setFood(day.extra.Ingredients)
  },[mealName, day])

  return (
    <>
      <div className='meal'>
        <p >{mealName}</p>
        <p >0</p>
      </div>
      
      <div>
      {food?.map((ingredient, index)=>(
        <div className='meal' key={index}>
          {ingredient.name}
     
        </div>
      ))}

      </div>

      <div className='handlers'>
        <button>Añadir alimento</button>
        <button>generar receta</button>
      </div>
    </>
  )
}

export default MealHandler;