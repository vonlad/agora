import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import Accueil from './Accueil';
import Test from './Test';
import Publication from './publication';

const store = createStore(combineReducers({}))

function App() {
  return (
    <Provider store={store} >
      <Router>
        <Switch>
          <Route component={Accueil} path="/" exact />
          <Route component={Test} path="/test" exact />
          <Route component={Publication} path="/publication" exact/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
