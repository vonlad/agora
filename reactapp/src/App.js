import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import token from './reducers/token'
import Accueil from './Accueil';
import Inscription from './inscription';

import Test from './Test';

const store = createStore(combineReducers({token}))

function App() {
  return (
    <Provider store={store} >
      <Router>
        <Switch>
          <Route component={Accueil} path="/" exact />
          <Route component={Test} path="/test" exact />
          <Route component={Inscription} path="/inscription" exact />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
