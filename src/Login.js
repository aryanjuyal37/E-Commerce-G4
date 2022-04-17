import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth,email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://cdn-icons-png.flaticon.com/512/1051/1051286.png?w=740&t=st=1648355916~exp=1648356516~hmac=e091c3358b4676134a891b515f64e0adcb5daa33f41fbdff04713e4a0f8b97ba' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing in you agree to our terms and conditions</p>

                <button onClick={register} className='login__registerButton'>Create your Account</button>
            </div>
        </div>
    )
}

export default Login