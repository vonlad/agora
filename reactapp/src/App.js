<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import token from "./reducers/token";
import Accueil from "./Accueil";
import Inscription from "./inscription";
import Thematique from "./Thematique";
import Test from "./Test";
import Publication from "./publication";
import profil from "./";
=======
import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

import { Provider} from 'react-redux';
import { connect} from 'react-redux';
import { createStore, combineReducers } from 'redux';
import token from './reducers/token'
import Accueil from './Accueil';
import Inscription from './inscription';
import Profilcomp from './profilcomp';
import Thematique from './Thematique';
import nouvelArticle from './nouvelArticle';
import Test from './Test';
import Publication from './publication';
import Cookies from 'js-cookie';


>>>>>>> d79c0ed1dd7f3725d25e8c4e5dd9078e9dafac70

const store = createStore(combineReducers({ token }));

function App(props) {
 
  return (
<<<<<<< HEAD
    <Provider store={store}>
=======

    <Provider store={store} >
>>>>>>> d79c0ed1dd7f3725d25e8c4e5dd9078e9dafac70
      <Router>
        <Switch>
          <Route component={Accueil} path="/" exact />
          <Route component={Test} path="/test" exact />
          <Route component={Inscription} path="/inscription" exact />
<<<<<<< HEAD
          <Route component={Publication} path="/publication" exact />
          <Route component={Thematique} path="/Thematique" exact />
=======
          <Route component={Profilcomp} path="/profilcomp" exact />
          <Route component={Publication} path="/publication" exact/>
          <Route component={Thematique} path="/Thematique" exact/>
          <Route component={nouvelArticle} path="/nouvelArticle" exact/>
>>>>>>> d79c0ed1dd7f3725d25e8c4e5dd9078e9dafac70
        </Switch>
      </Router>
      
   

    </Provider>
  );
}

export default App;