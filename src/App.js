import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Login from './components/login';
import CreateAccount from './components/createaccount';
import NavBar from './components/navbar';
import Home from './components/home';

function App() {
  let loggedIn = false
  let hasAccount = true
  let user = 'myself'

  return (
    <main> {
      loggedIn === true ?
      (
        hasAccount === true ?
        <Login />
        :
        <CreateAccount />
      )
      :
      <React.Fragment>
        <NavBar></NavBar>
        <div className='container'>
          <Home user={user}></Home>
        </div>
      </React.Fragment>
    } 
    </main>
  );
}

export default App;
