import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {useSelector} from 'react-redux';
import Article from './article';


const NewDiv = ()=>{

    const article = useSelector(state => state.Article);

    return(
        <div className="news-div">
            {/* {article.map(item => {
                const key = uuidv4();
                return <Article
                    imgURL={item.urlToImage}
                    Title={item.title}
                    PublishDate={item.publishedAt}
                    id={key} 
                />
            })} */}
        </div>
    );
};

export default NewDiv;