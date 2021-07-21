import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import mainPage from './pages/mainPage';
import productPage from './pages/productPage';
import shopPage from './pages/shopPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route component={mainPage} exact path="/"/>
        <Route component={productPage} path="/productPage/:id"/>
        <Route component={shopPage} path="/list-shop"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
