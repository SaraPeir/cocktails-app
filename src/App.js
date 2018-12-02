import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { updateInfoNoAlc } from './actions';
import { updateInfoGin } from './actions';
import { updateInfoVodka } from './actions';
// import { updateInfoRhum } from './actions';
import { changeSelectText } from './actions';
import DrinkCard from './components/Analcolic/DrinkCard';
import Select from './components/Analcolic/Select';
import Analcolic from './components/Analcolic/Analcolic';
import Alcoholic from './components/Alcoholic/Alcoholic';
import RecipesPage from './components/Recipes/RecipesPage';
import Home from './components/Home/Home';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.updateInfoNoAlc(),
    this.props.updateInfoGin(),
    this.props.updateInfoVodka()
    // this.props.updateInfoRhum()
  }

  renderize(){
    setTimeout(this.renderUsersList.bind(this), 3000);  //In order to resolve the problem that arrayList3 was seen in its initial state (a void array, length = 0)
  }

  renderizeGin(){
    setTimeout(this.renderUsersListGin.bind(this), 4000);  //In order to resolve the problem that arrayList3 was seen in its initial state (a void array, length = 0)
  }

  renderizeVodka(){
    setTimeout(this.renderUsersListVodka.bind(this), 4000);  //In order to resolve the problem that arrayList3 was seen in its initial state (a void array, length = 0)
  }

  // renderizeRhum(){
  //   setTimeout(this.renderUsersListRhum.bind(this), 4000);  //In order to resolve the problem that arrayList3 was seen in its initial state (a void array, length = 0)
  // }

  renderUsersList() {
    if(this.props.arrayListNoAlc3 !== undefined && this.props.arrayListNoAlc3[0] !== undefined){
      return console.log(this.props.arrayListNoAlc3[0].map((x, index) => x.drinks).map((y, index) => y[0]).map((z, index) => z.strDrink));
    } else {return console.log('this.props.arrayListNoAlc3 no definido')}}

  renderUsersListGin() {
    if(this.props.arrayListGin3 !== undefined && this.props.arrayListGin3[0] !== undefined){
      return console.log('this.props.arrayListGin3', this.props.arrayListGin3[0].map((x, index) => x.drinks).map((y, index) => y[0]).map((z, index) => z.strDrink));
    } else {return console.log('this.props.arrayListGin3 no definido')}}

  renderUsersListVodka() {
    if(this.props.arrayListVodka3 !== undefined && this.props.arrayListVodka3[0] !== undefined){
      return console.log('this.props.arrayListVodka3', this.props.arrayListVodka3[0].map((x, index) => x.drinks).map((y, index) => y[0]).map((z, index) => z.strDrink));
    } else {return console.log('this.props.arrayListVodka3 no definido')}}

    // renderUsersListRhum() {
    //   if(this.props.arrayListRhum !== undefined && this.props.arrayListRhum[0] !== undefined){
    //     return console.log('this.props.arrayListRhum', this.props.arrayListRhum[0].data.map((x, index) =>  x.name));
    //   } else {return console.log('this.props.arrayListRhum no definido')}
    // }

    render() {
      return (
        <div className="App">
          {this.renderize()}
          {this.renderizeGin()}
          {this.renderizeVodka()}
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/alcoholic' component={ Alcoholic } />
            <Route path='/analcolic' component={ Analcolic } />
            <Route path='/recipes' component={ RecipesPage } />
          </Switch>
        </div>
      );
    }
}

// borrado desde el return: {this.renderizeRhum()}

function mapStateToProps(state) {
  return {
    arrayListNoAlc: state.dataNoAlc.drinksDataNoAlc,
    //[nombrePropriedad] = [state].[nombreElementoIzqInrootReducer(reducers/index.js)].[nombreElementoQueCambia(initialState in firstArrayDrinks)]
    arrayListNoAlc2: state.dataNoAlc.drinksDataNoAlc2,
    arrayListNoAlc3: state.dataNoAlc.drinksDataNoAlc3,
    arrayListGin3: state.dataGin.drinksDataGin3,
    arrayListVodka3: state.dataGin.drinksDataVodka3,
    // arrayListRhum: state.dataGin.drinksDataRhum

  }
}


// así podemos implementar React Redux con Router

export default withRouter(connect(mapStateToProps, { updateInfoNoAlc, updateInfoGin, updateInfoVodka})(App));
 //borrado desde el connect: updateInfoRhum
