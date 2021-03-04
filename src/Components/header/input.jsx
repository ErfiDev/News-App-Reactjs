import React from 'react';

const Input = ()=>{
    return(
        <div className="header-center">
            <div className="center-main">
                <div className="center-main-left">
                    <span>
                        🤞
                    </span>
                </div>

                <div className="center-main-right">
                    <input 
                        type="text" 
                        id="input" 
                        autocomplete="off"    
                    />
                </div>
            </div>
        </div>
    );
}

export default Input;