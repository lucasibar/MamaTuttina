import React, {useEffect} from 'react';
import { Route , Switch} from "react-router-dom";
import Home from './componentes/Home';
import Day from './componentes/Day/Day';
import { useDispatch } from 'react-redux';
import {getDays} from './redux/actions'

function App() {

  let dispatch = useDispatch() 
  useEffect(()=>{
    dispatch(getDays())
  },[dispatch])

  return (
  <div className="App">
  <Switch>        
    {/* <Route path="/encuesta">
      <Encuesta />
    </Route> */}
    <Route exact path="/">
      <Home />
    </Route>
    <Route 
    exact path="/day/:id?"
      component ={Day}
    />


  </Switch>   
  </div>
  )
}

export default App;