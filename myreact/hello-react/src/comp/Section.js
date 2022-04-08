import React, { Component } from 'react';
import './section.css';

class Section extends Component{
    render(){
        return (
        <section>
            <h2>{this.props.title}</h2>
            <p>{this.props.cont}</p>
        </section>
        )
    }
}

export default Section;