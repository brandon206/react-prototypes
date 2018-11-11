import React from 'react';
import {
    Route 
}from 'react-router-dom';
import Welcome from './welcome';
import Nav from './nav';
import OurMacarons from './our_macrons';
import GiftParties from './gifts-parties';
import Contact from './contact';

function App (props) {
    return(
        <div className="container">
            <Nav/>
            <Route exact path = "/" component = {Welcome}/>
            <Route path = "/our-macarons" component = {OurMacarons}/>
            <Route path = "/gifts-parties" component = {GiftParties}/>
            <Route path = "/contact" component = {Contact}/>
        </div>
    )
}

export default App;