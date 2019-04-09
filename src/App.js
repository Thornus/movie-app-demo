import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={Home}/>
          <Route path='/movie/:title' component={MovieDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
