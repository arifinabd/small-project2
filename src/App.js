import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainPage from './pages/mainPage';
import productPage from './pages/productPage';
import shopPage from './pages/shopPage'
import cartPage from './pages/cart'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route component={MainPage} exact path="/"/>
        <Route component={productPage} path="/productPage/:id"/>
        <Route component={shopPage} path="/list-shop"/>
        <Route component={cartPage} path="/cart"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
