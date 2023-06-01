import React, { useState } from 'react'
import axios from 'axios'
import './MealHandler.css'


function MealHandler({mealName, meal}) {
const [activeAdd, setActiveAdd]= useState(false)
const [food, setFood]= useState({
  ingredient:'',
  amount: 0,
  unit: 'grs'
})

const inputController = ()=> setActiveAdd(!activeAdd)
const handlefood =(e)=>{
  setFood(state=>({
      ...state,
      [e.target.name]: e.target.value
  }))
}

const handleAddFood = async (e)=>{
  e.preventDefault() 
  const body={
    ingredient: food.ingredient,
    amount:food.amount,
    unit:food.unit
  }
  body.idMeal = meal.id
  await axios.post(`http://localhost:3001/meal/addingredient`, body)

  setActiveAdd(false)
}
  return (
    <>
      <div className='meal'>
        <p >{mealName}</p>
        <p >800</p>
      </div>
      
      <div >
      {meal? meal.Recipes?.map((recipe, i)=>(<p key={i}>{recipe.name}</p>)): null}
      {meal? meal.Ingredients?.map((ingredient, i)=>(<p key={i}>{ingredient.name}</p>)): null}
      </div>

      <div className='handlers'>
        <button onClick={inputController}>Añadir ingrediente</button>
        <button>generar receta</button>
      </div>

      {activeAdd? 
      <form onSubmit={handleAddFood}>
        <input 
          type='text' 
          name='ingredient' 
          value={food.ingredient} 
          placeholder= {food.ingredient} 
          onChange={handlefood}/>
        <input 
          type='text' 
          name='amount'
          value={food.amount}
          placeholder= {food.amount} 
          onChange={handlefood}/>
        <input 
          type='text' 
          name='unit' 
          value={food.unit} 
          placeholder= {food.unit} 
          onChange={handlefood}/>
        
        <button type='submit'>+</button>
      </form>
      :null
      }
    </>
  )
}

export default MealHandler;