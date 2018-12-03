import { combineReducers } from 'redux';
import { updateInfoNoAlc } from './fetchsRed';  //A. updateInfo: Desde firstArrayDrinks.js
import { updateInfoGin } from './fetchsGinRed';
import { updateInfoVodka } from './fetchsVodkaRed';
import { updateInfoRhum } from './fetchsRhumRed';
import { changeSelectText } from './selectRed';
import { changeGinSelectText } from './selectGinRed';
import { changeVodkaSelectText } from './selectVodkaRed';
import { changeRhumSelectText } from './selectRhumRed';


const rootReducer = combineReducers({
  dataNoAlc: updateInfoNoAlc,  //A.
  selVal: changeSelectText,
  selValGin: changeGinSelectText,
  dataGin: updateInfoGin,
  selValVodka: changeVodkaSelectText,
  dataVodka: updateInfoVodka,
  dataRhum: updateInfoRhum,
  selValRhum: changeRhumSelectText
});

export default rootReducer;

