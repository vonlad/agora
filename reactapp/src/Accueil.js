import React from 'react';
import { Button, Image } from 'antd';
import './App.css';
// import {Redirect} from 'react-router-dom';
// import {connect} from 'react-redux';

function Accueil(props) {
    return (
        <div>
            <div>Voici la page d'accueil!</div>
            <Button type="primary" >Boutton</Button>
            <Image
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
        </div>
    )
}

export default Accueil