import React from 'react';
import {useSelector} from 'react-redux';
import Article from './article';

const NewDiv = ()=>{

    const article = useSelector(state => state.Article);

    return(
        <div className="news-div">
            {article.map(item => (
                <Article
                    imgURL={item.urlToImage}
                    Title={item.title}
                    PublishDate={item.publishedAt} 
                />
            ))}
        </div>
    );
};

export default NewDiv;