import React from 'react';
import {useDispatch} from 'react-redux';
import {setTargetAction} from '../../Actions/targetAction';

const NewDiv = ({imgURL , Title , PublishDate , id})=>{

    const dis = useDispatch();

    return(
        <div className="article">
            <div className="image-container">
                <img 
                    alt={Title} 
                    src={imgURL}
                    onClick={()=> dis(setTargetAction(id))}
                />
            </div>

            <div className="title-container">
                <p onClick={()=> dis(setTargetAction(id))}>
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