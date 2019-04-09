import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const linkStyle = {
    flex: '0 50%'
};

const divStyle = {
    backgroundSize: 'cover',
    height: '40vh'
};

class MoviePoster extends Component {
    render() {
        return(
            <Link to={{
                    pathname: `/movie/${this.props.movie.title}`,
                    state: {
                        movie: this.props.movie
                    }}}
                style={linkStyle}
            >
                <div style={{...divStyle, backgroundImage: `url(${this.props.src})`}}></div>
            </Link>
        )
    }
}

export default MoviePoster;