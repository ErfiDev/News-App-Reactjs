import {combineReducers} from 'redux';
import inputReducer from './inputReducer';
import EncriptedArticle from './encriptedArticle';
import Target from './target';

const Reducer = combineReducers({
    input: inputReducer,
    enArticle: EncriptedArticle,
    Target
});

export default Reducer;