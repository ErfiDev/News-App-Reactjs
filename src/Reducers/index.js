import {combineReducers} from 'redux';
import getNews from './getNews';
import inputReducer from './inputReducer';
import Article from './articleReducer';

const Reducer = combineReducers({
    getNews,
    input: inputReducer,
    Article
});

export default Reducer;