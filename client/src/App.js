import React, {useEffect} from 'react';
import Week from './componentes/Week/Week';
import Day from './componentes/Day/Day';
import { Route , Switch} from "react-router-dom";
import { useDispatch } from 'react-redux';
import {getRecipes, getIngredients, getObjetives} from './redux/actions'

function App() {
  let dispatch = useDispatch() 
  useEffect(()=>{
    // dispatch(getWeek())
    dispatch(getRecipes())
    dispatch(getIngredients())
    dispatch(getObjetives())
  },[dispatch])
  
  return (
  <div className="App">
  <Switch>
    <Route 
    exact path="/"
      component ={Week}
    />
    <Route 
    exact path="/day"
    component ={Day}
    />  
  </Switch>   
  </div>
  )
}

export default App;