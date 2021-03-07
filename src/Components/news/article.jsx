import React from 'react';
import {Link} from 'react-router-dom';

const NewDiv = ({imgURL , Title , PublishDate , id})=>{
    return(
        <div className="article">
            <div className="image-container">
                <Link to={id}>
                    <img 
                        alt={Title} 
                        src={imgURL}
                    />
                </Link>
            </div>

            <div className="title-container">
                <p>
                    <Link to={id}>
                        {Title} 
                    </Link>
                </p>
            </div>

            <div className="publish-container">
                <p>
                    {PublishDate}
                </p>
            </div>
        </div>
    );
};

export default NewDiv;