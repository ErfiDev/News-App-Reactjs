import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch} from 'react-redux';
import inputAction from '../../Actions/inputAction';
import {getNewsAction} from '../../Actions/getNews';

const Input = ()=>{

    const dis = useDispatch();

    return(
        <div className="header-center">
            <div className="center-main">
                <div className="center-main-left">
                    <span onClick={()=> dis(getNewsAction())}>
                        <SearchIcon fontSize="inherit" color="inherit" />
                    </span>
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