import {combineReducers} from 'redux';
import getNews from './getNews';
import inputReducer from './inputReducer';

const Reducer = combineReducers({
    getNews,
    input: inputReducer
});

export default Reducer;