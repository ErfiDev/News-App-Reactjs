import React from 'react';
import Left from './left';
import Input from './input';

import "./Compiled/header.css";

const Header = ()=>{
    return(
        <header id="header">
            <Left />
            <Input />
        </header>
    );
};

export default Header;