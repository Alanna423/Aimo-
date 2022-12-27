import React, { Component } from 'react';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" href='/home'>Home <span class="sr-only">(current)</span></a>
                    <a className="nav-link" href="/requests">Requests</a>
                    <a className="nav-link" href="/profile">Profile</a>
                    <a className="nav-link" href="/about">About TIF3</a>
                    <a className="nav-link" onClick={props.onReturnHome}>Logout</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;