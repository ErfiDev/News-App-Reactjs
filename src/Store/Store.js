import {createStore , applyMiddleWare , compose} from 'redux';
import Reducer from '../Reducers/index';
import thunk from 'redux-thunk';

const Store = createStore(
    Reducer,
    compose(
        applyMiddleWare(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default Store;