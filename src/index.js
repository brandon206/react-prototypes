import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

function luckyNumber () {
    let randomNumber1to1000 = Math.floor((Math.random() * 1000) + 1);
    return randomNumber1to1000;
}
var user = {
    name: 'Brandon',
    luckyNumber: luckyNumber()
};

function greeting (user) {
        return(
            <div className = "container">
                <h1>{`Welcome ${user.name}`}</h1>
                <h2 className = "text-muted">{`Your lucky number is: ${user.luckyNumber}`}</h2>
            </div>
        );
}

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
