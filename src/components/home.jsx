import React, { Component } from 'react';

function Home(props) {
    let thing = props.user
    console.log(thing)

    return (
        <div>
            <h1>Welcome {thing}</h1>
            <p>This is a TIF3 project!</p>
        </div>
    );
}

export default Home;