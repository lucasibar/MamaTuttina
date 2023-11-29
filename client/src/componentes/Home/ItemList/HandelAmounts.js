import * as React from 'react';
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import './HandelAmounts.css'


export default function HandelAmounts({ingredient}) {
  const [open, setOpen] = useState(false);
  const [ingredientItem, setIngredientItem] = useState("");
  const [unit, setUnit] = useState(0);
  const [amount, setAmount] = useState("gr");
  useEffect(()=>{
    setIngredientItem(ingredient)
   },[ingredient])

 

  const handleOnChangeUnit = (e) => {
    e.preventDefault();
    setUnit(e.target.value);
  };
  const handleOnChangeAmount = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const handleSave = () => {

    // dispatch(changePortionsRecipe({mealId, recipeId, portion}))
    handleClose()
  }
  return (
    <React.Fragment>
       <div className='meal' onClick={handleClickOpen}>
          <p >{ingredientItem.name}</p>
          <p >{amount} {unit}</p>
        </div>
          <Divider variant="middle" />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{ingredientItem.name}</DialogTitle>
        <DialogContent>
        <TextField
            value={unit}
            onChange={handleOnChangeUnit}
            autoFocus
            margin="dense"
            id="name"
            label="numero de porciones"
            type="email"
            fullWidth
            variant="standard"
          />
                    <TextField
            value={amount}
            onChange={handleOnChangeAmount}
            autoFocus
            margin="dense"
            id="name"
            label="numero de porciones"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Cambiar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
