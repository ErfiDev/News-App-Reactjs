import React from 'react';
import {ToastContainer} from 'react-toastify';
import {BrowserRouter} from 'react-router-dom';
import Header from './Components/header/header';
import News from './Components/news/index';

import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component
{
    render()
    {
        return(
            <BrowserRouter>
                <Header />
                <News />

                <ToastContainer />
            </BrowserRouter>
        );
    }
}

export default App;