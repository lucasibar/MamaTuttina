import React from 'react';
import Planification from './componentes/Planification/Planification';
import Day from './componentes/Diary/Day';
import LandingPage from './componentes/LandingPage/LandingPage';
import SignIn from './componentes/LandingPage/SignIn';
import SignUp from './componentes/LandingPage/SignUp';
import Home from './componentes/Home/Home';
import Purchase from './componentes/Purchase/Purchase';
import { Route , Switch} from "react-router-dom";



function App() {
  return (
  <div className="App">
  <Switch>
  <Route 
      exact path="/purchase"
      component ={Purchase}
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
      exact path="/"
      component ={Home}
    />
    <Route 
      path="/landingPage"
      component ={LandingPage}
    />
  </Switch>   
  </div>
  )
}

export default App;