import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import mainPage from './pages/MainPage';
import UpdateAlatTulis from './pages/UpdateAlatTulis';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
function App(){
  return(
    <Router>
      <Switch>
        <Route path='/' exact component={mainPage} />
        <Route path='/updateAlatTulis/:id' exact component={UpdateAlatTulis} />

      </Switch>
    </Router>
  );
}

export default App;