import React from 'react';
import MoviesContainer from './movieContainer';

function App (props) {
    return(
        <div className = 'container'>
            <h1 className = 'text-center'>Axios Demo</h1>
            <MoviesContainer/>
        </div>
    );
}

export default App;

