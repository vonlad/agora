import React, { useState, useEffect } from 'react';
import './App.css';
import { Input, Button, Modal } from 'antd';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { CookiesProvider } from "react-cookie";
import Cookies from 'js-cookie';

function Inscription(props) {

    const [signUpUsername, setSignUpUsername] = useState('')
    const [signUpEmail, setSignUpEmail] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')
    const [signUpVerifPassword, setSignUpVerifPassword] = useState('')
    const [signInEmail, setSignInEmail] = useState('')
    const [signInPassword, setSignInPassword] = useState('')
    const [userExists, setUserExists] = useState(false)
    const [listErrorsSignin, setErrorsSignin] = useState([])
    const [listErrorsSignup, setErrorsSignup] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false);
    Cookies.set('token', props.token)


   var handleClick = async () => {
       if (props.token == null){
     showModal()
       } else {
        var mycookie = Cookies.get('token');
        console.log(mycookie)
        return <Redirect to='/' />
       }}

        

    var handleSubmitSignup = async () => {

        const data = await fetch('/sign-up', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `usernameFromFront=${signUpUsername}&emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}&passwordVerifFromFront=${signUpVerifPassword}`
        })

        const body = await data.json()
        console.log(body)
        if (body.result == true) {
            setUserExists(true);
            props.addToken(body.token)
        } else {
            setErrorsSignup(body.error)
        }
    }

    var handleSubmitSignin = async () => {

        const data = await fetch('/sign-in', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`
        })

        const body = await data.json()
        console.log(body)
        if (body.result == true) {
            setUserExists(true);
            props.addToken(body.token)
        } else {
            setErrorsSignin(body.error)
        }
    }

    if (userExists) {
        return <Redirect to='/' />
    }

    var tabErrorsSignin = listErrorsSignin.map((error, i) => {
        return (<p>{error}</p>)
    })

    var tabErrorsSignup = listErrorsSignup.map((error, i) => {
        return (<p>{error}</p>)
    })



    var showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = e => {
        setIsModalVisible(false);
    };

    const handleCancel = e => {
        setIsModalVisible(false);
    };


  

    return (
        
  
        <div className="Login-page" >

            <div>

                <Button onClick={() => showModal()} style={{ width: '80px' }} type="secondary" style={{ width: '80px' }}>Sign-up</Button>
                <Button onClick={() => handleClick()}  style={{ width: '80px' }} type="secondary" style={{ width: '80px' }}>vote</Button>
            </div>
            <Modal title="Inscription/Connexion"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}>
                <div className="Sign">
                    <h3 style={{ color: "white" }}> Je suis d??j?? inscrit </h3>

                    <Input onChange={(e) => setSignInEmail(e.target.value)} className="Login-input" placeholder="email" />

                    <Input.Password onChange={(e) => setSignInPassword(e.target.value)} className="Login-input" placeholder="password" />

                    {tabErrorsSignin}

                    <Button onClick={() => handleSubmitSignin()} type="primary" style={{ width: '80px' }}>Sign-in</Button>

                </div>
                <div className="Sign">

                    <h3 style={{ color: "white" }}>Je n'ai pas encore de compte </h3>

                    <Input onChange={(e) => setSignUpUsername(e.target.value)} className="Login-input" placeholder="username" />

                    <Input onChange={(e) => setSignUpEmail(e.target.value)} className="Login-input" placeholder="email" />

                    <Input.Password onChange={(e) => setSignUpPassword(e.target.value)} className="Login-input" placeholder="password" />

                    <Input.Password onChange={(e) => setSignUpVerifPassword(e.target.value)} className="Login-input" placeholder="verif password" />

                    {tabErrorsSignup}

                    <Button onClick={() => handleSubmitSignup()} style={{ width: '80px' }} type="primary" style={{ width: '80px' }}>Sign-up</Button>



                </div>
            </Modal>
        </div>
    
    );
}

function mapStateToProps(state){
    return {token:state.token}
  }

function mapDispatchToProps(dispatch) {
    return {
        addToken: function (token) {
            dispatch({ type: 'addToken', token: token })
        }
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
   
)(Inscription)