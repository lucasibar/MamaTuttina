import * as React from 'react';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {changePortionsRecipe} from '../../../redux/actions'


export default function PortionHandler({portionBDD, mealId, recipeId}) {
  const [open, setOpen] = useState(false);
  const [portion, setPortion] = useState("");

  
  useEffect(()=>{
    setPortion(portionBDD)
   },[])


  let dispatch = useDispatch() 

  const handleOnChange = (e) => {
    e.preventDefault();
    setPortion(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const handleSave = () => {
    dispatch(changePortionsRecipe({mealId, recipeId, portion}))
    handleClose()
  }
  return (
    <React.Fragment>
      <div className='meal' style={{ marginTop: "50px" }} >
          <p >Porciones</p>
          <p style={{ color: "blue" }} onClick={handleClickOpen} >{portionBDD}</p>
        </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Porciones</DialogTitle>
        <DialogContent>
          <TextField
            value={portion}
            onChange={handleOnChange}
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
