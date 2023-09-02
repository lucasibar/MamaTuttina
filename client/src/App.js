import React from 'react';
import Week from './componentes/Week/Week';
import Day from './componentes/Day/Day';
import Purchase from './componentes/Purchase/Purchase';
import Home from './componentes/Home';
import { Route , Switch} from "react-router-dom";

function App() {
  return (
  <div className="App">
  <Switch>
    <Route 
    exact path="/day"
    component ={Day}
    />  
    {/* 
    <Route 
    exact path="/"
      component ={Survey}
    /> */}
    <Route 
    exact path="/week"
      component ={Week}
    />
    <Route 
    exact path="/purchase"
    component ={Purchase}
    />  
    {/* <Route 
    exact path="/purchase"
    component ={Purchase}
    />   */}
    <Route 
    exact path="/"
      component ={Home}
    />
  </Switch>   
  </div>
  )
}

export default App;