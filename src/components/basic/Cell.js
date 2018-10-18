import React, { Component } from 'react';
import * as style from './Cell.css';

class Cell extends Component {
    render() {
        return (
            <div className={style.cell}>
                {this.props.value}
            </div>
        );
    }
}

export default Cell;
