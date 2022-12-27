import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import Requests from './requests';
import Profile from './profile';
import About from './about';

const Pages = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/requests' element={<Requests />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Pages;