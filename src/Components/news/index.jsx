import React from 'react';
import {Route , Switch} from 'react-router-dom';
import Layout from '../layout';

import "./Compiled/news.css";

const NewContainer = ()=>{

    

    return(
        <main id="main-news">
            <Switch>
                <Route path="/" exact component={Layout} />
            </Switch>
        </main>
    );
};

export default NewContainer;