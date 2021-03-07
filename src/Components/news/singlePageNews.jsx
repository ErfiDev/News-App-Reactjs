import React from 'react';
import {useSelector , useDispatch} from 'react-redux';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {clearTargetAction} from '../../Actions/targetAction';
import {Link} from 'react-router-dom';

const SinglePageNews = ({match})=>{
    
    const art = useSelector(state => state.Target);
    const dis = useDispatch();

    console.log(art);
    
    return(
        <div className="single-page">
            <div className="single-page-title-container">
                <h1>
                    {art[0].source.title}
                </h1>
            </div>

            <div className="single-page-image-container">
                <img 
                    src={art[0].source.urlToImage} 
                    alt={art[0].source.title} 
                />
            </div>

            <div className="single-page-description-container">
                <p>
                    {art[0].source.description}
                </p>
            </div>
            

            <div className="article-details-container">
                <ul className="details-list">
                    <li>
                        Auther: {art[0].source.author}
                    </li>

                    <li>
                        {art[0].source.publishedAt}
                    </li>

                    <li>
                        From {art[0].source.source.name}
                    </li>
                </ul>
            </div>

            <div className="news-content">
                <p>
                    {art[0].source.content}
                </p>
            </div>

            <div className="full-content">
                <a href={art[0].source.url} target="_black">
                    Click to see the full News
                </a>
            </div>


            <h2 back="backtoHome">
                <Link to="/All-News" onClick={()=> dis(clearTargetAction())}>
                    <ArrowBackIosIcon fontSize="large" />
                    Back Home
                </Link>
            </h2>
        </div>
    );
}

export default SinglePageNews;