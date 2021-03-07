import React from 'react';
import {useDispatch} from 'react-redux';
import {setTargetAction} from '../../Actions/targetAction';
import {Link} from "react-router-dom";

const NewDiv = ({imgURL , Title , PublishDate , id})=>{

    const dis = useDispatch();

    return(
        <div className="article">
            <div className="image-container">
                <Link to={`/News/${id}`}>
                    <img 
                        alt={Title} 
                        src={imgURL}
                        onClick={()=> dis(setTargetAction(id))}
                    />
                </Link>
            </div>

            <div className="title-container">
                <p onClick={()=> dis(setTargetAction(id))}>
                    <Link to={`/News/${id}`}>
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