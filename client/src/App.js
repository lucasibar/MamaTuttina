import React from 'react';
import Day from './componentes/Day/Day';
import { Route , Switch} from "react-router-dom";

function App() {
  return (
  <div className="App">
  <Switch>
    <Route 
    exact path="/"
      component ={Day}
    />
  </Switch>   
  </div>
  )
}

export default App;