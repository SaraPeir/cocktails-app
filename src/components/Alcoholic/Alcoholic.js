import React from 'react';
import { Component } from 'react';
import './Alcoholic.css';

import SelectGin from './GinDrinks/Select';
import DrinkCardGin from './GinDrinks/DrinkCard';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import SelectVodka from './VodkaDrinks/Select';
import DrinkCardVodka from './VodkaDrinks/DrinkCard';

// import SelectRhum from './RhumDrinks/Select';
// import DrinkCardRhum from './RhumDrinks/DrinkCard';


class Alcoholic extends Component {

  render() {
    return (
      <div className = "alcoholic-div">
          <div className = "button-div">
            <Link to={`/`} style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}}><button>Home</button></Link>
          </div>
          <h1>Alcoholic cocktails</h1>
          <div className = "alcoholic-drink-div">
            <SelectGin />
            <DrinkCardGin />
          </div>
          <SelectVodka />
          <DrinkCardVodka />
      </div>
    );
  }
}

export default Alcoholic;

// Borrados desde return:
// <SelectRhum />
//           <DrinkCardRhum />
