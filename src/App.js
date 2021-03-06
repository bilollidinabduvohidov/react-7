import React from 'react'
import { InfoProvider } from "./context/Context.jsx";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home.jsx"
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx"
import Order from './pages/Order.jsx';
import Partfolio from "./pages/Partfolio.jsx";
import PaidCursor from "./pages/PaidCursor.jsx"
import Settings from "./pages/Setings.jsx"
import YouWin from './pages/YouWin.jsx';

import './steyls/App.css';

function App() {
  return (
    <InfoProvider>
      <BrowserRouter>
        <div className='App'>
          <Switch>
           
            <Route exact path="/" component={Home} />
            <Route path="/Partfolio" component={Partfolio} />
            <Route path="/Order" component={Order} />
            <Route path="/Profile" component={Profile} />
            <Route path="/PaidCursor" component={PaidCursor} />
            <Route path="/Register" component={Register} /> 
            <Route path="/Settings" component={Settings} />
            <Route path="/YouWin" component={YouWin} />
            
          </Switch>
  
        </div>
      </BrowserRouter>
    </InfoProvider>
  );
}

export default App;
