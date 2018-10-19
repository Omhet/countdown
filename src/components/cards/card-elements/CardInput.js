import React, { Component } from 'react';
import style from './CardInput.css';

class CardInput extends Component {
    render() {
        return (
            <div className={style.cardInput}>
                { this.props.value }
            </div>
        );
    }
}

export default CardInput;
