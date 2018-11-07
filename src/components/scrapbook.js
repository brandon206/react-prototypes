import React from 'react';
import './scrapbook.css';
import ScrapbookImages from './scrapbook_images';
import image_data from './image_data';

function Scrapbook (props) {
    const images = image_data.map( (item,index) => {
        return (
            <ScrapbookImages key = {index} about = {item}/>
        );
    } );
    return (
        <div className = 'scrapbook-container'>
            {images}
            
        </div>
    );
}

export default Scrapbook;