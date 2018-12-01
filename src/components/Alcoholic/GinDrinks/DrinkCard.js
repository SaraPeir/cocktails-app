import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { changeGinSelectText } from '../../../actions';
import store from '../../../index.js';
import './DrinkCard.css';


class DrinkCardGin extends Component {


  render() {
    return (
      <div>
        <div className ="cocktail-card-div">
          <div className ="cocktail-image-div">
          <img src={this.props.selectedDrinkSrc} alt={this.props.selectedDrinkName} width='100%'/>
          </div>
          <div className ="cocktail-text-div">
            <h2>{this.props.selectedDrinkName}</h2>
            <h2>{this.props.selectedDrinkType}</h2>
            <h2>{this.props.selectedDrinkIngrAndMeas}</h2>
            <h2>{this.props.selectedDrinkGlassAndInstructions}</h2>
          </div>
      </div>
  </div>
    );
  }
}

function mapStateToProps(state) {
let object = state.selValGin.drinkInfoGinArray;

const object2 = object[0];

if(object !== undefined){
// console.log('ginObject', object)
}

function accessToDrinkName(){
  if(object2 !== undefined){  //If I did not see in this way, it said me that object3 was undefined
  return object2.strDrink;
  }
}

function accessToDrinkType(){
  if(object2 !== undefined){
  if(object2.strCategory == 'Other/Unknown'){
    return '';
    } else{
    return `Cathegory: ${object2.strCategory}`;
    }
  }
}

function accessToDrinkSrc(){
  if(object2 !== undefined){
  return object2.strDrinkThumb;
  }
}

function accessToDrinkGlassAndInstructions(){
  if(object2 !== undefined){
  return `${object2.strInstructions} Serve it in a ${object2.strGlass}`;
  }
}

function createIngredientsArray(){
  let ingredients = [];
  if(object2 !== undefined){
    ingredients = [object2.strIngredient1, object2.strIngredient2, object2.strIngredient3, object2.strIngredient4, object2.strIngredient5, object2.strIngredient6, object2.strIngredient7, object2.strIngredient8, object2.strIngredient9, object2.strIngredient10, object2.strIngredient11, object2.strIngredient12, object2.strIngredient13, object2.strIngredient14, object2.strIngredient15].filter((i, index) =>  i !== '').filter((j, index) =>  j !== '');
    const ingredients2 = ingredients.filter((j, index) =>  j !== ' ');
    const ingredients3 = ingredients2.filter((w, index) =>  w !== '↵');
    const ingredients4 = ingredients3.filter((z, index) =>  z !== null);
//↵
    return ingredients4;
  }
}

createIngredientsArray();

function createMeasuresArray(){
  let measures = [];
  if(object2 !== undefined){
    measures = [object2.strMeasure1, object2.strMeasure2, object2.strMeasure3, object2.strMeasure4, object2.strMeasure5, object2.strMeasure6, object2.strMeasure7, object2.strMeasure8, object2.strMeasure9, object2.strMeasure10, object2.strMeasure11, object2.strMeasure12, object2.strMeasure13, object2.strMeasure14, object2.strMeasure15].filter((i, index) =>  i !== '');
    const measures2 = measures.filter((j, index) =>  j !== ' ');
    const measures3 = measures2.filter((w, index) =>  w !== '↵');
    const measures4 = measures3.filter((z, index) =>  z !== null);

    return  measures4;
  }
}

createMeasuresArray();

let arrayIngredients = createIngredientsArray();
let arrayMeasures = createMeasuresArray();


function createCoupledArray(){
  if(arrayIngredients !== undefined && arrayMeasures !== undefined){
    let ingrMeasArray = arrayIngredients.concat(arrayMeasures);
      let coupledArray = [];
      const length = ingrMeasArray.length;
      for(let i = 0; i < length/2; i++){
        coupledArray.push(ingrMeasArray[i] + ' (' + ingrMeasArray[length/2 + i] + ')')
      }
    return coupledArray.join(', ')
  }
}

  return {
    selectedDrinkName: accessToDrinkName(),
    selectedDrinkType: accessToDrinkType(),
    selectedDrinkSrc: accessToDrinkSrc(),
    selectedDrinkGlassAndInstructions: accessToDrinkGlassAndInstructions(),
    selectedDrinkIngrAndMeas:createCoupledArray()
  }
}

export default connect(mapStateToProps, { changeGinSelectText })(DrinkCardGin)
