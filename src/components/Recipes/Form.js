import React from 'react';
import { Component } from 'react';

class Form extends Component { 
  render() {
    return (
      <div>
      <input type="text" placeholder="Name" onChange={this.props.onWriteName} value={this.props.cocktailName} />
      <textarea rows="4" cols="50" placeholder="Ingredients" onChange={this.props.onWriteIngredients} value={this.props.cocktailIngredients}></textarea>
      <textarea rows="4" cols="50" placeholder="Recipe" onChange={this.props.onWriteRecipe} value={this.props.cocktailRecipe}></textarea>
      <button onClick={this.props.onUpdateData}>Ok</button>
      </div>
    );
  }
}

export default Form;

