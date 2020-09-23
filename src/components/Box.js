import React, { Component } from 'react';

class Box extends Component {
    render() {
        return (
            <button className="box" onClick={props.onClick}>
                {this.props.value}
            </button>
        );
    } 
}

export default Box;