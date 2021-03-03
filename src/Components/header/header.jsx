import React from 'react';
import Left from './left';
import Right from './right';
import Input from './input';


const Header = ()=>{
    return(
        <header id="header">
            <Left />
            <Input />
            <Right />
        </header>
    );
}

export default Header;