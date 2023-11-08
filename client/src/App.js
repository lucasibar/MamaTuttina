import React from 'react';
import Planification from './componentes/Planification/Planification';
import Day from './componentes/Diary/Day';
import LandingPage from './componentes/LandingPage/LandingPage';
import SignIn from './componentes/LandingPage/SignIn';
import SignUp from './componentes/LandingPage/SignUp';
import AddFood from './componentes/AddFood/AddFood';
import { Route , Switch} from "react-router-dom";



function App() {
  return (
  <div className="App">
  <Switch>
  <Route 
      exact path="/addFood"
      component ={AddFood}
    />
        <Route 
      exact path="/planification"
      component ={Planification}
    />
    <Route 
      path= "/day"
      component={Day}
    />
        <Route 
      path="/signin"
      component ={SignIn}
    />
      <Route 
      path="/signup"
      component ={SignUp}
    />
    <Route 
      path="/"
      component ={LandingPage}
    />
  </Switch>   
  </div>
  )
}

export default App;