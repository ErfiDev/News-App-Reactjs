import React from 'react';


const SinglePageNews = ()=>{
    return(
        <div className="single-page">
            <div className="single-page-description-container">
                <p>
                    The attack comes days after the US carried out air strikes on Iran-backed Iraqi militias in Syria.
                </p>
            </div>

            <div className="single-page-image-container">
                <img 
                    src="https://ichef.bbci.co.uk/news/1024/branded_news/AA4A/production/_117349534_gettyimages-1193597165.jpg" 
                    alt="/" 
                />
            </div>

            <div className="single-page-title-container">
                <h1>
                Iraq rocket attack: Air base hosting US-led coalition forces targeted
                </h1>
            </div>

            <div className="article-details-container">
                <ul className="details-list">
                    <li>
                        Auther: https://www.facebook.com/bbcnews
                    </li>

                    <li>
                        2021-03-03T10:08:29Z
                    </li>

                    <li>
                        From BBC News
                    </li>
                </ul>
            </div>

            <div className="news-content">
                <p>
                image captionUS-led coalition forces are stationed at Al Asad air base to combat the Islamic State group Ten rockets have hit a base hosting US-led coalition forces in western Iraq. Iraq's military… [+1392 chars]
                </p>
            </div>

            <div className="full-content">
                <a href="#" target="_blank">
                    Click to see the full News
                </a>
            </div>
        </div>
    );
}

export default SinglePageNews;