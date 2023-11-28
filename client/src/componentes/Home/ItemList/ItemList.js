import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function ItemList({list}) {
  const [checked, setChecked] = React.useState([0]);
  const [amount, setAmount] = useState(0);
  const [unit, setUnit] = useState("grs");

  const [open, setOpen] = useState(false);
  // const handleToggle = (ingredientId) => () => {
  //   const currentIndex = checked.find(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  // };
  console.log(list)

  const handleOnChangeAmount = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  };
  const handleOnChangeUnit= (e) => {
    e.preventDefault();
    setUnit(e.target.value);
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
console.log( amount)
  }
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {list?.map((ingredient) => {
        {/* const labelId = `checkbox-list-label-${ingredient.id}`; */}

        return (

          <ListItem
            key={ingredient.id}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
 
            <ListItemButton role={undefined} onClick={handleClickOpen()} dense>
              {/* <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon> */}
              <ListItemText id={ingredient.id} primary={`${ingredient.amount} ${ingredient.units} de ${ingredient.name} `} />
            </ListItemButton>
          </ListItem>

        );
      })}
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Porciones</DialogTitle>
              <DialogContent>
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
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Cambiar</Button>
              </DialogActions>
            </Dialog>



    </List>
  );
}



