import React,{Fragment} from 'react';
import {useSelector} from 'react-redux';
import {isEmpty} from 'lodash';
import NotNews from './news/notNews';
import NewsDiv from './news/news-div';
// import SinglePageNews from './news/singlePageNews';

const Layout = ()=>{

    const Article = useSelector(state => state.enArticle);

    return(
        <Fragment>
            {isEmpty(Article) ? (
            
                <NotNews />

            )
            :
            (
                
                <NewsDiv />
            
            )}
        </Fragment>
    );
}

export default Layout;