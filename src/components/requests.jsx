import React, { Component } from 'react';
import Request from './request';


export default function Requests() {

    console.log("this is the requests page")
    return ( 
        <div>
            <h2>This is the Requests page.</h2>
            <Request />
        </div>
    );
}