import React,{Fragment} from 'react';
import {ToastContainer} from 'react-toastify';
import Header from './Components/header/header';
import News from './Components/news/index';

import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component
{
    render()
    {
        return(
            <Fragment>
                <Header />
                <News />

                <ToastContainer />
            </Fragment>
        );
    }
}

export default App;