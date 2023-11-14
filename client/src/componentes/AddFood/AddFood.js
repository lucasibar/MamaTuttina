import './AddFood.css'
import * as React from 'react';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import {getIngredients} from '../../redux/actions'
import { useHistory } from 'react-router-dom';


import './AddFood.css';

function AddFood() {
  const ingredients = useSelector((state) => state.ingredients);
  const [options, setOptions] = useState([]);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  useEffect(() => {
    if (ingredients.length > 0) {
      // Mapea tus ingredientes para obtener solo sus nombres y configura las opciones.
      const ingredientNames = ingredients.map((ingredient) => ingredient.name);
      setOptions(ingredientNames);
    }
  }, [ingredients]);

  const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');





  const history = useHistory();

  const handleGoBack = () => {
    history.goBack(); // Esto llevará al usuario a la página anterior.
  }
  return (
    <div>
      <AppBar sx={{ position: 'fixed' }}>
        <Toolbar>
        
          <Typography sx={{ ml: 1, flex: 40}}  variant="h6">
          Busqueda  
          </Typography>
          <IconButton edge="start" color="inherit" aria-label="close" sx={{ flex:5, justifyItems:'right' }}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div style={{ marginTop: '90px' }}>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Agregar alimento" />}
        />
      </div>

      <List sx={{ marginTop: 15, flex: 1 }}>
        <button className="meal">
          <Typography className="button-text" variant="subtitle1">
            Item que ya está agregado a la MEAL
          </Typography>
          <Typography variant="subtitle1">{"Cantidad"}</Typography>
        </button>
      </List>


        <Button variant="text" style={{      
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
          }}
          onClick={handleGoBack}
        >
          AGREGAR
        </Button>





    </div>
  );
}

export default AddFood;