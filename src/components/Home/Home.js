import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import {Image1} from '../../images/image1.jpeg';
import {Image2} from '../../images/image2.jpeg';


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
