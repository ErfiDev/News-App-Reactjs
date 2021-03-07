import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch} from 'react-redux';
import inputAction from '../../Actions/inputAction';
import {getNewsAction} from '../../Actions/getNews';
import {Link} from 'react-router-dom';

const Input = ()=>{

    const dis = useDispatch();

    return(
        <div className="header-center">
            <div className="center-main">
                
                <div className="center-main-left">
                    <Link to="/All-News" onClick={()=> dis(getNewsAction())}>
                        <span>
                            <SearchIcon fontSize="inherit" color="inherit" />
                        </span>
                    </Link>
                </div>
                

                <div className="center-main-right">
                    <input 
                        onChange={(e)=> dis(inputAction(e))}
                        type="text" 
                        id="input" 
                        autocomplete="off"   
                        placeholder="Search by title, auther, url and..." 
                    />
                </div>
            </div>
        </div>
    );
}

export default Input;