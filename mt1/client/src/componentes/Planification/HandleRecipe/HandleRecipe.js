import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// import { putRecipePurchases } from '../../../redux/actions'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



export default function HandleRecipe({meal, recipe}) {
    const recipes = useSelector(state=> state.recipes)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
    setOpen(true);
    };

  return (
    <div>
    <Button fullWidth variant={recipe?"contained":"outlined"} onClick={handleOpen}>
      <NavLink to={`/`}>
      {meal}   
      </NavLink>
    </Button>
    </div>
  );
}
