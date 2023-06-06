import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios'


function InputFoodHandler(props) {
//    const actualDay = useSelector(state=> state.actualDay)
//    console.log(actualDay)

//    const [food, setFood]= useState({
//     ingredient:'',
//     amount: 0,
//     unit: 'grs'
//   })
//    const handlefood =(e)=>{
//     setFood(state=>({
//         ...state,
//         [e.target.name]: e.target.value
//     }))
//   }
//   const handleAddFood = async (e)=>{
//       e.preventDefault() 
// console.log("aca vendria la funcion para mandar a la base de datos")
      // const body={
      //   ingredient: food.ingredient,
      //   amount:food.amount,
      //   unit:food.unit
      // }
      // body.idMeal = meal.id
      // await axios.post(`http://localhost:3001/meal/addingredient`, body)
   //}
   
   return (
    <>
    <h1>QUE ONDAAAA</h1>
     {/* <form onSubmit={handleAddFood}>
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
      */}
       </> 
   )
}

export default InputFoodHandler;