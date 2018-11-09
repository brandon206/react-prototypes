import React, {Component} from 'react';
import Movie from './movies';
import axios from 'axios';

class MovieContainer extends Component {
    constructor (props) {
        super(props);

        this.state = {
            movies: []
        }
    }

    componentWillMount () {
        const API_url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get (API_url).then( (resp) => {
            this.setState ({
                movies: resp.data.feed.entry
            });
            console.log(resp);
        } );
    };

    render () {
        console.log('The state is:', this.state);
        return (
            <div>
                <h2>Movie Container</h2>
                <Movie/>
            </div>
        );
    }
}

export default MovieContainer;