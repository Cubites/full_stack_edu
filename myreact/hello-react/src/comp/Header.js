import React, { Component } from 'react';
import './header.css';

class Header extends Component{
    render(){
        return (
        <header>
            <h1><a href="/">{this.props.title}</a></h1>
        </header>
        );
    }
}

export default Header;