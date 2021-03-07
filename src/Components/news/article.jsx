import React from 'react';

const NewDiv = ({imgURL , Title , PublishDate , id})=>{
    return(
        <div className="article">
            <div className="image-container">
                <img 
                    alt={Title} 
                    src={imgURL}
                />
            </div>

            <div className="title-container">
                <p>
                    {Title} 
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