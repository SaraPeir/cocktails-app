import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import React from 'react';
import { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className = "home-div">
        <div className = "image-div">
        </div>
        <div className = "text-div">
          <div className = "title">cocktails recipes</div>
          <p className = "text">Sweet or sour, fresh or frozen, a cocktail is the mirror of the personal tastes, which in some cases are the reflexion of the soul. Find your favourite cocktail here! </p>
          <Link to={`/alcoholic`} style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}}><button>Alcoholic drinks</button></Link>
          <Link to={`/analcolic`} style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}}><button>No alcoholic drinks</button></Link>
          <Link to={`/recipes`} style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}}><button>Your personal recipes</button></Link>
      </div>
  </div>
    );
  }
}

export default Home;
