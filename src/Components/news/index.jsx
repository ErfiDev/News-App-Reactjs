import React from 'react';
import {useSelector} from 'react-redux';
import {isEmpty} from 'lodash';
import NewsDiv from './news-div';
import NotNews from './notNews';

import "./Compiled/news.css";

const NewContainer = ()=>{

    const Article = useSelector(state => state.Article);

    return(
        <main id="main-news">
            {isEmpty(Article) ? (
                <NotNews />
            ) : (
                <NewsDiv />
            )}
        </main>
    );
};

export default NewContainer;