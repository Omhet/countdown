import React, { Component } from 'react';
import style from './CardWrapper.css';

import Rate from './Rate';
import CardHeader from './CardHeader';
import Timer from './Timer';
import CancelButton from './CancelButton';
import DoneButton from './DoneButton';

class CardWrapper extends Component {
    render() {
        return (
            <div className={style.cardwrapper}>
                <Rate />
                <CardHeader />
                <Timer />
                <CancelButton />
                <DoneButton />
            </div>
        );
    }
}

export default CardWrapper;
