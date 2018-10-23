import React, { Component } from 'react';
import * as style from './Cell.css';

import BaseStyle from "../basic/Base.css";


const getColor = state => {
    if (state === 'positive') {
        return 'palegreen';
    } else if (state === 'negative') {
        return 'salmon';
    } else {
        return 'whitesmoke'
    }
};

const getOpacity = hidden => {
  return (hidden) ? '1' : '0.5';
};

class Cell extends Component {
    handleClick = () => {
        this.props.cellClick(this.props.index, this.props.value);
    };

    render() {
        const color = getColor(this.props.state);
        const opacity = getOpacity(this.props.hidden);

        return (
            <div className={[style.cell]} onClick={this.handleClick}>
                {this.props.value}
                <div className={style.cellCover} style={{ backgroundColor: color, opacity}}></div>
            </div>
        );
    }
}

export default Cell;
