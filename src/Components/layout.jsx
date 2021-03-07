import React,{Fragment} from 'react';
// import {useSelector} from 'react-redux';
import {Route , Switch} from 'react-router-dom';
// import {isEmpty} from 'lodash';
import NotNews from './news/notNews';
import NewsDiv from './news/news-div';
import SinglePageNews from './news/singlePageNews';

const Layout = ()=>{

    return(
        <Fragment>
            <Switch>
                <Route path="/News/:id" component={SinglePageNews} />             
                <Route path="/All-News" component={NewsDiv} />
                <Route path="/" exact component={NotNews} />
            </Switch>
        </Fragment>
    );
}

export default Layout;