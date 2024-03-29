import * as React from 'react';
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Swal from 'sweetalert2';
import { addFoodDay } from '../../redux/actions'

const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
};

export default function InputPrueba({dayId, meal}) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true)
  const handleClose = () =>setOpen(false)
  
  
  const mealRecipes= useSelector( state=> state.recipes)
  const mealIngredients= useSelector( state=> state.ingredients)

  const [foodsList, setFoodsList] = useState([]);
  const amountsList = ["1"," 5", "10", "50", "100", "250", "500"];
  const unitsList = ['taza', 'gramos', 'platos', 'unidades', 'kilogramos', 'litros', 'mililitros'];

  const [recipes, setRecipes] = useState([]);
 
  useEffect(()=>{
    if(mealRecipes && mealIngredients){
      let mealRecipes1 = mealRecipes.map(i=> i.name) 
      let mealIngredients1 = mealIngredients.map(i=> i.name) 
      setRecipes(mealRecipes1)
      setFoodsList(mealRecipes1.concat(mealIngredients1) )
    }
  },[mealIngredients, mealRecipes])


  const [food, setFood] = useState('');
  const [amount, setAmount] = useState('');
  const [unit, setUnit] = useState('');


  let dispatch = useDispatch() 
  const addFood = async () =>{
    setOpen(false)
    await Swal.fire({position: 'top-end', icon: 'success', title: 'Your work has been saved', showConfirmButton: false, timer: 1500})
    const postFood = {
      food,
      amount,
      unit,
      dayId,
      meal,
      recipe: false
    }
    if(recipes.includes(food)) postFood.recipe = true
    dispatch(addFoodDay(postFood))
    setOpen(true)
  }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" size="large" style={{width: "100%", position: "fixed", bottom: 0}}>Agregar alimento</Button>

    
      <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
        <Box sx={{ ...style, width: 250 }}>
          <h2 id="parent-modal-title">Alimento</h2> 

          <Autocomplete
          disablePortal
          id="combo-box-demo"
          value={food}
          onChange={(event, newValue) => setFood(newValue)}
          options={foodsList}
          sx={{ width: 250 }}
          renderInput={(params) => <TextField {...params} label="Receta-Ingrediente" />}
          /> 

          <div className='formpost'>
              <Autocomplete
              disablePortal
              id="combo-box-demo"
              value={amount}
              onChange={(event, newValue) => setAmount(newValue)}
              options={amountsList}
              sx={{ width: 115 }}
              renderInput={(params) => <TextField {...params} label="Cantidad" />}
              /> 

              <Autocomplete
              disablePortal
              id="combo-box-demo"
              value={unit}
              onChange={(event, newValue) => setUnit(newValue)}
              options={unitsList}
              sx={{ width: 115 }}
              renderInput={(params) => <TextField {...params} label="Unidad" />}
              /> 
          </div>
         
          <Button onClick={addFood} sx={{ width: 250, mt:'30px' }} variant="contained">Outlined</Button>
        </Box>
      </Modal>
    </div>
  );
}