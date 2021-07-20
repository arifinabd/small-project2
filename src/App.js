import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import mainPage from './pages/mainPage';
import product from './pages/productPage';
import shop from './pages/shopPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route component={mainPage} exact path="/"/>
        <Route component={product} path="/cart"/>
        <Route component={shop} path="/list-shop"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
