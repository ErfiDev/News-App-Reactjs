import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Store from './Store/Store';

render(
    <Provider store={Store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,  document.getElementById("root")
);