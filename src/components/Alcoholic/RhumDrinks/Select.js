// import React from 'react';
// import { Component } from 'react';
// import { connect } from 'react-redux'
// import { changeRhumSelectText } from '../../../actions';
// import store from '../../../index.js';


// class SelectRhum extends Component {
// constructor(){
//   super();
//   this.state = {
//     arrayRhumDrinks: []
//   }
// }

// updateArray(){
//   let array = this.props.arrayList;
//     this.setState({
//       arrayRhumDrinks: array
//     });
//   console.log('this.state.arrayRhumDrinks', this.state.arrayRhumDrinks)
// }

// updateArraySetTimeout(){
//   setTimeout(this.updateArray.bind(this), 2000);  //In order to resolve the problem that arrayList3 was seen in its initial state (a void array, length = 0)
// }

// componentWillMount(){
//   this.updateArraySetTimeout()
// }

// createOptions(){
//   let array = this.state.arrayRhumDrinks;
//     if(array != undefined && array.length > 0){
//       let options = array[0].data.map((x, index) => <option key={index}> {x.name}</option>)
//         return  options
//       } else {
//         return  <option> Rhum Drinks</option>
//         }
//     }

//   render() {
//     return (
//       <div>
//         <select value = {this.props.selectedOption} onChange = {this.props.changeRhumSelectText}><option>Rhum Drinks</option>{this.createOptions()}</select>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     arrayList: state.dataRhum.drinksDataRhum,
//     selectedOption: state.selValRhum.selectRhumValue
//   }
// }

// export default connect(mapStateToProps, { changeRhumSelectText })(SelectRhum);

// //This Select file is different to the others. In this case, this.props.arrayList, corresponding to state.dataRhum.drinksDataRhum esta vaćío al tempo t = 0 and in this time the page renders. If I used setInterval, the page has already rendered, so the options will not be drawn into the page, even if the console.log was visible. For this reason, I had to use a state into the constructor that will be updated at time t > 0, then used into createOptions function. As the state changes, the page will be re-rendered. At the first rendering no options are avalaible yet and the else condition is valid, as this.state.arrayRhumDrinks is void. Then, the array will be update ans the second render is carried out
