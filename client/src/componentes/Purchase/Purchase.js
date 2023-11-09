import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getIngredients} from '../../redux/actions'

const Purchase = () => {
  const [value, setValue] = useState(0);
  const ingredientes = useSelector((state) => state.ingredients);


  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Agrupar ingredientes por mercado
  const ingredientGroups = ingredientes.reduce((groups, ingredient) => {
    const market = ingredient.market || 'Otros';
    if (!groups[market]) {
      groups[market] = [];
    }
    groups[market].push(ingredient);
    return groups;
  }, {});

  return (
    <Box sx={{ width: "100%", bgcolor: 'background.paper' }}>
      <Tabs

        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {Object.keys(ingredientGroups).map((market, index) => (
          <Tab key={index} label={market} />
        ))}
      </Tabs>
      {Object.entries(ingredientGroups).map(([market, ingredients], index) => (
        <Box key={index} role="tabpanel" hidden={value !== index}>
          {value === index && (
            <ul>
              {ingredients.map((ingredient, i) => (
                
                <li key={i}>{ingredient.name}</li>
              ))}
            </ul>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Purchase;