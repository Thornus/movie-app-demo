import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TopBar from '../components/TopBar';
import MoreIcon from '@material-ui/icons/MoreVert';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PlayIcon from '@material-ui/icons/PlayArrow';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const POSTER_BASE_PATH = 'http://image.tmdb.org/t/p/w185/';

class MovieDetail extends Component {
  render() {
    const movie = this.props.location.state.movie;
    const releaseYear = movie.release_date.split('-')[0];
    const leftIcon = <Link to='/'><ArrowBackIcon/></Link>;
    
    return (
      <>
        <TopBar title='MovieDetail' rightIcon={<MoreIcon/>} leftIcon={leftIcon}/>

        <AppBar position="sticky" style={{backgroundColor: '#009688'}}>
          <Toolbar style={{alignItems: 'center', justifyContent: 'space-between'}}>
            <p style={{fontSize: '32px', margin: '22px 0'}}>{movie.original_title}</p>
          </Toolbar>
        </AppBar>

        <div className='details-container' style={{backgroundColor: '#ffffff', height: '100vh', padding: '18px', color: '#747474'}}>
          <div className='top-container' style={{height: '30%', textAlign: 'left'}}>
            <img
              src={POSTER_BASE_PATH + movie.poster_path}
              alt={movie.original_title}
              style={{maxHeight: '100%', marginRight: '24px'}}
            />

            <div style={{display: 'inline-block', verticalAlign: 'top'}}>
              <p style={{fontSize: '24px'}}>{releaseYear}</p>
              <p style={{color: 'black'}}><b>{`${movie.vote_average}/10`}</b></p>
              <Button variant='outlined' style={{backgroundColor: '#86e4db', borderColor: '#6fcac2', borderRadius: 0, color: '#757373', maxWidth: '80%', fontSize: '12px', lineHeight: '16px', fontFamily: 'Helvetica'}}>
                MARK AS FAVORITE
              </Button>
            </div>
          </div>

          <div className='bottom-container' style={{textAlign: 'left', fontSize: '12px', letterSpacing: '0.3px'}}>
            <p>{movie.overview}</p>

            <hr></hr>

            <p style={{fontSize: '18px'}}>Trailers:</p>

            <PlayIcon style={{color: 'black', verticalAlign: 'middle', fontSize: '32px', padding: '12px'}}/>Trailer 1

            <hr></hr>

            <PlayIcon style={{color: 'black', verticalAlign: 'middle', fontSize: '32px', padding: '12px'}}/>Trailer 2

          </div>
        </div>
      </>
    );
  }
}

export default MovieDetail;