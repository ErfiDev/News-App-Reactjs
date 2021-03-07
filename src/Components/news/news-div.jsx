import React from 'react';
import {useSelector} from 'react-redux';
import Article from './article';


const NewDiv = ()=>{

    const EnArticle = useSelector(state => state.enArticle);

    return(
        <div className="news-div">
            {EnArticle.map(item => (
                <Article 
                    PublishDate={item.source.publishedAt}
                    Title={item.source.title}
                    id={item._id}
                    imgURL={item.source.urlToImage}
                />
            ))}
        </div>
    );
};

export default NewDiv;