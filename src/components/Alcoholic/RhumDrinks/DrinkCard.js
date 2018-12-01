import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { changeRhumSelectText } from '../../../actions';
import store from '../../../index.js';


class DrinkCardRhum extends Component {

accessToDrinkName(){
  let selectedDrink = this.props.selectedDrink;
    if(selectedDrink.length > 0){
      console.log('this.props.selectedDrink', selectedDrink)
          if(selectedDrink[0] !== undefined){
          return selectedDrink[0].name
          }
        } else {
          return ''
        }
    }

    accessToDrinkSrc(){
      let selectedDrink = this.props.selectedDrink;
        if(selectedDrink.length > 0){
          console.log('this.props.selectedDrink', selectedDrink)
              if(selectedDrink[0] !== undefined){
              return selectedDrink[0].imgsrc
              }
            } else {
              return ''
            }
        }

        accessToDrinkIngredients(){
          let selectedDrink = this.props.selectedDrink;
            if(selectedDrink.length > 0){
              console.log('this.props.selectedDrink', selectedDrink)
                  if(selectedDrink[0] !== undefined){
                  return selectedDrink[0].ingredients
                  }
                } else {
                  return ''
                }
            }

            accessToDrinkRecipe(){
              let selectedDrink = this.props.selectedDrink;
                if(selectedDrink.length > 0){
                  console.log('this.props.selectedDrink', selectedDrink)
                      if(selectedDrink[0] !== undefined){
                      return selectedDrink[0].recipe
                      }
                    } else {
                      return ''
                    }
                }

  render() {
    return (
      <div>
        <h2>{this.accessToDrinkName()}</h2>
        <img src={this.accessToDrinkSrc()} alt={this.accessToDrinkName()} width='200px'/>
        <h2>{this.accessToDrinkIngredients()}</h2>
        <h2>{this.accessToDrinkRecipe()}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedDrink: state.selValRhum.drinkInfoRhumArray
  }
}

export default connect(mapStateToProps, { changeRhumSelectText })(DrinkCardRhum)
