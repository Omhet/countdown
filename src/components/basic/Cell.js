import React, { Component } from 'react';
import * as style from './Cell.css';

const getColor = state => {
    if (state === 'positive') {
        return 'palegreen';
    } else if (state === 'negative') {
        return 'salmon';
    } else {
        return 'whitesmoke'
    }
};

class Cell extends Component {
    handleClick = () => {
        this.props.cellClick(this.props.index);
    };

    render() {
        const color = getColor(this.props.state);

        return (
            <div className={style.cell} onClick={this.handleClick}>
                {this.props.value}
                <div className={style.cellCover} style={{ backgroundColor: color}}></div>
            </div>
        );
    }
}

export default Cell;
