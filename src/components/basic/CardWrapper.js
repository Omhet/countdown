import React, { Component } from 'react';
import style from './CardWrapper.css';
import Rate from './Rate';
import CardHeader from './CardHeader';
import Timer from './Timer';
import CancelButton from './CancelButton';
import DoneButton from './DoneButton';
import { connect } from "react-redux";
import WordCard from "../cards/WordCard";

const mapStateToProps = state => {
    return { level: state.level };
};


class CardWrapper extends Component {
    resolveCard = () => {
        if (this.props.level % 2 === 0) {
            return <WordCard/>;
        }
    };


    render() {
        const currentCard = this.resolveCard();

        return (
            <div className={style.cardwrapper}>
                <div className={style.upper}>
                    <Rate />
                    <CardHeader />
                    <Timer />
                </div>

                <div>
                    {currentCard}
                </div>

                <div className={style.bottom}>
                    <CancelButton />
                    <DoneButton />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(CardWrapper);
