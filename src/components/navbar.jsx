import React, { Component } from 'react';
<link href="https://fonts.cdnfonts.com/css/archivo" rel="stylesheet"></link>
const NavBar = (props) => {
    const mystyle = {
        
        position: "absolute",
        width: "100%",
        height: "5%",
        left: "0px",
        top: "20px",

        background: "#2A3065",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
        borderRadius: "50px"
      };
    const words = {
        
        fontFamily: "Archivo, sans-serif",
        fontStyle: "bold",
        fontWeight: "400",
        fontSize: "20px",
        lineHeight: "61px",
        color: "#FFFFFF",
        padding:"10%",
        
        

    }
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a  className="navbar-brand" href="#">Navbar</a>
            <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div style={mystyle} className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a style={words} className="nav-link" href="/requests">Requests</a>
                    <a style={words} className="nav-link" href="/profile">Profile</a>
                    <a style={words} className="nav-link" href="/about">About TIF3</a>
                    <a style = {words} className="nav-link" onClick={props.onReturnHome}>Logout</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;