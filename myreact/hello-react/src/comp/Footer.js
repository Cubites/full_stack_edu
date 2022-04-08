import React, { Component } from 'react';
import './footer.css';

class Footer extends Component{
    render(){
        return (
        <footer>
            {this.props.copy}
        </footer>
        )
    }
}

export default Footer;