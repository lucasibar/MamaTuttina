import * as React from 'react';
import {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './InputFoodHandler.css'
import Swal from 'sweetalert2';
import axios from 'axios'


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




export default function InputFoodHandler({dayId, meal, mealRecipes, mealIngredients}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true)
  const handleClose = () =>setOpen(false)

  const [foodsList, setFoodsList] = useState([]);
  const amountsList = ['Option 3', 'Option 4'];
  const unitsList = ['Option 5', 'Option 6'];
 
  useEffect(()=>{
    if(mealRecipes && mealIngredients){
      let mealRecipes1 = mealRecipes.map(i=> i.name) 
      let mealIngredients1 = mealIngredients.map(i=> i.name) 

      setFoodsList(mealRecipes1.concat(mealIngredients1) )
    }
  },[mealIngredients, mealRecipes])


  const [food, setFood] = useState('');
  const [amount, setAmount] = useState('');
  const [unit, setUnit] = useState('');

  const addFood = async () =>{
    setOpen(false)
    await Swal.fire({position: 'top-end', icon: 'success', title: 'Your work has been saved', showConfirmButton: false, timer: 1500})
    const postFood = {
      food,
      amount,
      unit,
      dayId,
      meal
    }
    await axios.post(`http://localhost:3001/meal`, postFood)

    setOpen(true)
  }

  return (
    <div>
      <Button onClick={handleOpen}>Agregar alimento</Button>
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