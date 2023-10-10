import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";

export default function HandleRecipe({recipeName, category, day, dayname}) {

  return (
    <div>
    <Button >
      <NavLink to={`/${dayname}/${day}`}>
      {recipeName} ------ {category} 
      </NavLink>
    </Button>
    </div>
  );
}
