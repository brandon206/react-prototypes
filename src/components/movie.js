import React, {Fragment} from 'react';

const Movie = (props) => {
    const {info} = props;
    return (
        <div>
            <div className = "container">
                <img src= {info['im:image'][2].label} alt=""/>
                <h3> {info['im:name'].label} </h3>
                <p> {info.summary.label} </p>
            </div>
            <div className = "divider"></div>
        </div>
    );
}

export default Movie;