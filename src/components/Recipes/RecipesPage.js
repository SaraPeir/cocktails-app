import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import Form from './Form';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class RecipesPage extends Component {
        constructor(props) {
        super(props);
        this.state = {
          name: '',
          ingredients: '',
          recipe: '',
          data: []
        }
        this.writeName = this.writeName.bind(this);
        this.writeIngredients = this.writeIngredients.bind(this);
        this.writeRecipe = this.writeRecipe.bind(this);
        this.updateData = this.updateData.bind(this);
      }
    
      writeName(event){
        this.setState({
          name: event.target.value
        });
      }

      writeIngredients(event){
        this.setState({
          ingredients: event.target.value
        });
      }

      writeRecipe(event){
        this.setState({
          recipe: event.target.value
        });
      }

      updateData(){
        const {name, ingredients, recipe, data} = this.state;
        const newName = name;
        const newIngredients = ingredients;
        const newRecipe = recipe;
        if(newName !== '' && newIngredients !== '' && newRecipe !== '') {
            this.setState({
                data: data.concat({newName, newIngredients, newRecipe})
            });
        }
        
        console.log('data', this.state.data);
        
        this.resetName();
        this.resetIngredients();
        this.resetRecipe();
      }

      resetName(){
        this.setState({
            name: ''
          });
      }

      resetIngredients(){
        this.setState({
            ingredients: ''
          });
      }

      resetRecipe(){
        this.setState({
            recipe: ''
          });
      }

  render() {
    const {name, ingredients, recipe, data} = this.state;
    return (
      <div>
        <Link to={`/`} style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}}><button>Home</button></Link>
        <Form cocktailName = {name} cocktailIngredients = {ingredients} cocktailRecipe = {recipe} 
            onWriteName = {this.writeName} onWriteIngredients = {this.writeIngredients } onWriteRecipe = {this.writeRecipe} 
            onUpdateData = {this.updateData} />
      </div>
    );
  }
}

export default RecipesPage;


//en FOrm, al rededor del button, pone un link que lleve a la pantalla entera solo de recetas WholeRecipeSecgtion (v. mood calendar)
// con el array que se forma aquí, hay que hacer un map de tarjetas que cadauna es una receta.
//