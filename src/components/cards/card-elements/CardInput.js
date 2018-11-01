import React, {Component} from 'react';
import style from './CardInput.css';
import {Icon} from "semantic-ui-react";


class CardInput extends Component {


    render() {
        // const trimmedValue = .replace(/\s/g, '');

        return (
            <div className={style.cardInput}>
                <span className={style.value}>
                    {this.props.value}
                </span>
                <Icon
                    onClick={this.props.backspaceClick}
                    className={style.backspace}
                    name='long arrow alternate left'
                    size='large'
                    />
            </div>
        );
    }
}

export default CardInput;
