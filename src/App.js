import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import mainPage from './pages/MainPage';
function App(){
  return(
    <Router>
      <Switch>
        <Route path='/' exact component={mainPage} />

      </Switch>
    </Router>
  );
}

export default App;