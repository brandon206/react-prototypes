import React from 'react';

function scrapbookImages (props) {
    console.log('scrapbook image props: ', props);
    const {src} = props.about;
    const{style} = props.about;
    return (
        <img className = 'scrapbook-image' src= {src} style = {style} alt=""/>
    );
}

export default scrapbookImages;