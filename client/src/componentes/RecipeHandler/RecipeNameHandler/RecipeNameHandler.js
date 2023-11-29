import * as React from 'react';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {changeNameFood} from '../../../redux/actions'


export default function RecipeNameHandler({mealId, recipeName, recipeId, returnToDay}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  
  useEffect(()=>{
    setName(recipeName)
   },[recipeName])


  let dispatch = useDispatch() 

  const handleOnChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    returnToDay()
  };



  const handleSave = () => {
    dispatch(changeNameFood({mealId, recipeId, newName: name}))
    handleClose()
  }
  return (
    <React.Fragment>
      <div className='meal' style={{ marginTop: "50px" }} >
          <p >Nombre</p>
          <p style={{ color: "blue" }} onClick={handleClickOpen} >{name}</p>
        </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nombre</DialogTitle>
        <DialogContent>
          <TextField
            value={name}
            onChange={handleOnChange}
            autoFocus
            margin="dense"
            id="name"
            label="nombre de receta"
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
