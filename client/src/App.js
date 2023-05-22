import React from 'react';
import { Route , Switch} from "react-router-dom";
// import Encuesta from './componentes/Encuesta';
import Home from './componentes/Home';

function App() {
  return (
  <div className="App">
  <Switch>        
    {/* <Route path="/encuesta">
      <Encuesta />
    </Route> */}
    <Route exact path="/">
      <Home />
    </Route>

  </Switch>   
  </div>
  )
}

export default App;