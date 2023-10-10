import React from 'react';
import Planification from './componentes/Planification/Planification';
import Day from './componentes/Diary/Day';
import Home from './componentes/Home';
import { Route , Switch} from "react-router-dom";

function App() {
  return (
  <div className="App">
  <Switch>
    <Route 
      exact path="/planification"
      component ={Planification}
    />
    <Route 
      path= "/:dayName/:dayId"
      component={Day}
    />
    {/* <Route quiero que esta ruta tire un mensaje de error "No se encontro el dia que se esta pidiendo" 
      path= "/day"
      component={ErrorDay}
    /> */}
    
    {/* 
    <Route 
    exact path="/"
      component ={Survey}
    /> */}
    {/* <Route 
    exact path="/purchase"
    component ={Purchase}
    />   */}
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