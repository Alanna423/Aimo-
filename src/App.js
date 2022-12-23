import logo from './logo.svg';
import React, { Component, useState } from 'react';
import './App.css';
import Login from './components/login';
import CreateAccount from './components/createaccount';
import NavBar from './components/navbar';
import Home from './components/home';

function App() {
  const [loggedIn, setLogIn] = useState(false);
  const [user, setUser] = useState('myself');
  const [hasAccount, setAccount] = useState(true);

  function handleLogInSubmit(name) {
    setUser(name)
    setLogIn(true)
  }

  function handleAccountSubmit(name) {
    setUser(name)
    setLogIn(true)
    setAccount(true)
  }

  function handleLogIn() {
    setAccount(true)
  }

  function handleAccount() {
    setAccount(false)
  }

  return (
    <main> {
      loggedIn === false ?
        hasAccount === true ?
          <div>
            <Login
              onLogInSubmit={handleLogInSubmit}
              onCreateAccount={handleAccount} 
              user={user}
            />
          </div>
          :
          <CreateAccount
            onAccountSubmit={handleAccountSubmit}
            onLogIn={handleLogIn}
          />
        :
        <React.Fragment>
          <NavBar
            onReturnHome={handleReturnHome}
          ></NavBar>
          <div className='container'>
            <Home user={user}></Home>
          </div>
        </React.Fragment>
    }
    </main>
  );

    function handleReturnHome() {
      setLogIn(false)
    }

}

export default App;
