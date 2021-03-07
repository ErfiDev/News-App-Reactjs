import {combineReducers} from 'redux';
import inputReducer from './inputReducer';
import EncriptedArticle from './encriptedArticle';

const Reducer = combineReducers({
    input: inputReducer,
    enArticle: EncriptedArticle
});

export default Reducer;