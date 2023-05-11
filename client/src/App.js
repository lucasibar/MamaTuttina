import React from 'react';
import { Route , Switch} from "react-router-dom";
import Encuesta from './componentes/Encuesta';

function App() {
  return (
  <div className="App">
  <Switch>        
    <Route path="/encuesta">
      <Home />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>

  </Switch>   
  </div>
  )
}

export default App;