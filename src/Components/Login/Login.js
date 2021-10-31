import React from 'react';
import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';

import "./Login.css"
const Login = () => {

    const [error, setError] = useState('')
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from.pathname || "/home"
    console.log(location.state);
    const getEmail = (e) => {
        const email = e.target.value;
        setEmail(email)
        e.target.value = "";
    }
    const getPassword = (e) => {
        const password = e.target.value;
        setPassword(password)
        e.target.value = "";

    }
    const { signInWithGoogle, signUpwithEmailAndPassword } = useAuth()
    const handleSubmit = e => {
        e.preventDefault();
        signUpwithEmailAndPassword(email, password);

    }
    const hadleGoogleLogin = () => {
        signInWithGoogle()

            .then(result => {
                history.push(redirect_uri)
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    return (
        <div>
            <div className="main">
                <p className="sign" align="center">Sign in</p>
                <form className="form1" />
                <input className="un " type="email" onBlur={getEmail} align="center" placeholder="Email" />
                <input className="pass" type="password" onBlur={getPassword} align="center" placeholder="Password" />
                <button onClick={handleSubmit} className="myButton mt-3">Login</button><br />
                _____or_____ <br />
                <p className="myButton" onClick={hadleGoogleLogin}>Sign in With Google</p><br />
            </div>
        </div>
    );
};

export default Login;