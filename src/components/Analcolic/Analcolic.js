import React from 'react';
import { Component } from 'react';
import DrinkCard from './DrinkCard';
import Select from './Select';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class Analcolic extends Component {

  render() {
    return (
      <div>
        <Link to={`/`} style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}}><button>Home</button></Link>
        <Select />
        <DrinkCard />
      </div>
    );
  }
}

export default Analcolic;
