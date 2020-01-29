import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/home';
import Product from './pages/product';
import Faq from './pages/faq';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
