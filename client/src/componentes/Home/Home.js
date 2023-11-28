import './Home.css';
import * as React from 'react';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {getIngredients} from '../../redux/actions'

import OptionsBar from "./OptionsBar/OptionsBar"
import SearchBar from "./SearchBar/SearchBar"
import ItemList from "./ItemList/ItemList"



function Home() {
  const ingredients = useSelector((state) => state.ingredients);
  const [options, setOptions] = useState([]);
  const[foodSelection, setFoodSelection] = useState([]);


  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch]);

  useEffect(() => {
    if (ingredients.length > 0) {
      const ingredientNames = ingredients.map((ingredient) => ingredient.name);
      setOptions(ingredientNames);
    }
  }, [ingredients]);
 

  const handelSelection = (foodName) => {
    const found = ingredients.find((ingr) => ingr.name === foodName);
    setFoodSelection([...foodSelection, found])
  }

console.log(foodSelection)

  return (
    <div>
      <AppBar sx={{ position: 'fixed' }}>
        <Toolbar>      
          <Typography sx={{ ml: 1, flex: 40}}  variant="h6">
          Home  
          </Typography>
        </Toolbar>
      </AppBar>
  <SearchBar options={options} handelSelection={handelSelection}/>
  <ItemList list={foodSelection}/>
  <OptionsBar />
    </div>
  );
}

export default Home;