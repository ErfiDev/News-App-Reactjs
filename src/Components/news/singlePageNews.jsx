import React from 'react';


const SinglePageNews = ({auther,description,title,url,urlImg,publish,content,from})=>{
    return(
        <div className="single-page">
            <div className="single-page-description-container">
                <p>
                    {description}
                </p>
            </div>

            <div className="single-page-image-container">
                <img 
                    src={urlImg} 
                    alt={title} 
                />
            </div>

            <div className="single-page-title-container">
                <h1>
                    {title}
                </h1>
            </div>

            <div className="article-details-container">
                <ul className="details-list">
                    <li>
                        Auther: {auther}
                    </li>

                    <li>
                        {publish}
                    </li>

                    <li>
                        From {from}
                    </li>
                </ul>
            </div>

            <div className="news-content">
                <p>
                    {content}
                </p>
            </div>

            <div className="full-content">
                <a href={url}>
                    Click to see the full News
                </a>
            </div>
        </div>
    );
}

export default SinglePageNews;