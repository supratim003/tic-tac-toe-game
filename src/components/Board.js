import React, { Component } from 'react';
import Box from "./Box"

class Board extends Component {
    renderBox(i){
        return <Box value={this.props.Box[i]}
        onclick={()=>this.props.onclick(i)}
        />
    }
    render() {
        return (
            <div>
                <div className="border-row">
                    {this.renderBox(0)}
                    {this.renderBox(1)}
                    {this.renderBox(2)}
                </div>
                <div className="border-row">
                    {this.renderBox(3)}
                    {this.renderBox(4)}
                    {this.renderBox(5)}
                </div>      
                <div className="border-row">
                    {this.renderBox(6)}
                    {this.renderBox(7)}
                    {this.renderBox(8)}
                </div>
            </div>
        );
    }
}

export default Board;