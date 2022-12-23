import React, { Component, useState } from 'react';

function Login(props) {

    // console.log("In Login", props.user)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    return ( 
        <div>
        <form name='loginForm'>
            <input
            name='name'
            type='text'
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
            required
            ></input>
            <br/>
            <input
            type='text'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            required></input>
            <br/>
            <button onClick={() => props.onLogInSubmit(username)}>Log In</button>
        </form>
        <button onClick={props.onCreateAccount}>Don't have an account?</button>
        </div>
    );
}

export default Login;