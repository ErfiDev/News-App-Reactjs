import React from 'react';
import {useSelector} from 'react-redux';
import Article from './article';

const NewDiv = ()=>{

    const article = useSelector(state => state.Article);

    return(
        <div className="news-div">
            {article.map(item => (
                <Article />
            ))}
        </div>
    );
};

export default NewDiv;