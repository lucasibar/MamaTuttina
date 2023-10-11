import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const inputFoodHandlerStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function InputFoodHandler({ handleIngredientSelection }) {
  const ingredients = useSelector(state => state.ingredients);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const handleIngredientChange = (event, newValue) => {
    setSelectedIngredient(newValue);
    if (handleIngredientSelection) {
      handleIngredientSelection(newValue);
    }
  };

  return (
    <div style={inputFoodHandlerStyles}>
      <Autocomplete
        id="combo-box-demo"
        options={ingredients}
        getOptionLabel={(option) => option.name}
        value={selectedIngredient}
        onChange={handleIngredientChange}
        renderInput={(params) => <TextField {...params} label="Ingredient" />}
      />
    </div>
  );
}