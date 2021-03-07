import React from 'react';
import {withRouter} from 'react-router-dom';
import Layout from '../layout';

import "./Compiled/news.css";

const NewContainer = ()=>{

    return(
        <main id="main-news">
            <Layout />
        </main>
    );
};

export default withRouter(NewContainer);