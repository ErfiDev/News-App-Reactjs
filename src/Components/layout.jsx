import React,{Fragment} from 'react';
import {useSelector} from 'react-redux';
import {isEmpty} from 'lodash';
import NewsDiv from './news/news-div';
import NotNews from './news/notNews';

const Layout = ()=>{

    const Article = useSelector(state => state.Article);

    return(
        <Fragment>
            {isEmpty(Article) ? (
            <NotNews />
            ) : (
                <NewsDiv />
            )}
        </Fragment>
    );
}

export default Layout;