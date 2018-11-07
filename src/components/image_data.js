import React from 'react';
import tiger from './images/tiger.jpeg';
import bear from './images/bear.jpeg';
import elephant from './images/elephant.jpeg';
import giraffe from './images/giraffe.jpeg';
import gorilla from './images/gorilla.jpeg';
import parrot from './images/parrot.jpeg';
import rhino from './images/rhino.jpeg';
import zebra from './images/zebra.jpg';

export default [
    {
        src: tiger,
        style: {
            left: '5%',
            transform: 'rotate(-10deg)'
        }
    },
    {
        src: bear,
        style: {
            left: '40%',
            transform: 'rotate(6deg)'
        }
    },
    {
        src: elephant,
        style: {
            right: '15%',
            transform: 'rotate(-9deg)'
        }
    },
    {
        src: giraffe,
        style: {
            left: '8%',
            transform: 'rotate(8deg)',
            top: '28%'
        }
    },
    {
        src: gorilla,
        style: {
            left: '37%',
            transform: 'rotate(-12deg)',
            top: '25%'
        }
    },
    {
        src: parrot,
        style: {
            right: '12%',
            transform: 'rotate(10deg)',
            top: '26%'
        }
    },
    {
        src: rhino,
        style: {
            left: '25%',
            transform: 'rotate(-5deg)',
            top: '48%'
        }
    },
    {
        src: zebra,
        style: {
            right: '25%',
            transform: 'rotate(16deg)',
            top: '52%'
        }
    }
];