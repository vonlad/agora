import React from 'react';
import { Button } from 'antd';
import './App.css';
import { Link } from 'react-router-dom';
// import {Redirect} from 'react-router-dom';
// import {connect} from 'react-redux';

function Accueil(props) {
    return (
        <div>
            <div>Voici la page d'accueil!</div>
            <Button type="primary" >Boutton</Button>
            <Link to="inscription"> <Button type="primary" > Inscription </Button> </Link>
        </div>
    )
}

export default Accueil