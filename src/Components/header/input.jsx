import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

const Input = ()=>{
    return(
        <div className="header-center">
            <div className="center-main">
                <div className="center-main-left">
                    <span>
                        <SearchIcon fontSize="inherit" color="inherit" />
                    </span>
                </div>

                <div className="center-main-right">
                    <input 
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