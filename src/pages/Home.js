import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import TopBar from '../components/TopBar';
import MoviePoster from '../components/MoviePoster';
import MoreIcon from '@material-ui/icons/MoreVert';

const URL = 'http://api.themoviedb.org/3/movie';
const API_KEY = '94cb02eea65af30b3952b4e248ede5ac';
const POSTER_BASE_PATH = 'http://image.tmdb.org/t/p/w185/';

const moviesContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap'
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies: []
    };
  }

  async componentDidMount() {
    let res = await fetch(`${URL}/popular?api_key=${API_KEY}`);
    let data = await res.json();

    this.setState({
      isLoaded: true,
      movies: data.results
    });
  }

  render() {
    const { error, isLoaded, movies } = this.state;

    if(error) {
      return <h1>Error</h1>;
    } else if(!isLoaded) {
      return <CircularProgress/>
    } else {
      let moviePosters = [];
      movies.forEach((item) => {
        moviePosters.push(
          <MoviePoster
            src={POSTER_BASE_PATH + item.poster_path}
            movie={item}
            key={item.id}
          />
        )
      });

      return (
        <>
          <TopBar title='Pop Movies' rightIcon={<MoreIcon/>}/>
          <div style={moviesContainerStyle}>
            {moviePosters}              
          </div>
        </>
      );
    }
  }
}

export default Home;