import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import mainPage from './pages/mainpage';
import product from './pages/product';
import shop from './pages/shop'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route component={mainPage} exact path="/"/>
        <Route component={product} path="/chart"/>
        <Route component={shop} path="/list-shop"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
