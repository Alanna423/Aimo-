import React, { Component, useState } from 'react';
const CreateAccount = (props) => {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    return ( 
        <div>
            <p>yes, I am real man, want to go skateboards?</p>
        <form name='createAccountForm'>
            <input
            type='text'
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
            required
            ></input>
            <br/>
            <input
            type='text'
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
            required></input>
            <br/>
            <input
            type='text'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
            ></input>
            <br/>
            <input
            type='text'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            required></input>
            <br/>
            <input
            type='text'
            placeholder='Phone Number'
            onChange={(e) => setPhone(e.target.value)}
            required></input>
            <br/>
        </form>
        <button onClick={() => props.onAccountSubmit(username)}>Create Account</button>
        <button onClick={props.onLogIn}>Have an account already?</button>
        </div>
    );
}
 
export default CreateAccount;