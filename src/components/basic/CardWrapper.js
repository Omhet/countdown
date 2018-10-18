import React, { Component } from 'react';
import style from './CardWrapper.css';
import Rate from './Rate';
import CardHeader from './CardHeader';
import Timer from './Timer';
import CancelButton from './CancelButton';
import DoneButton from './DoneButton';
import { connect } from "react-redux";
import WordCard from "../cards/WordCard";
import NumberCard from "../cards/NumberCard";
import { setCardName } from "../../actions/actionCreators";
import { NUMBER_CARD, WORD_CARD } from "../../constants/cardNames";

const mapStateToProps = state => {
    return { level: state.level };
};

const mapDispatchToProps = dispatch => {
    return {
        setCardName: name => dispatch(setCardName(name))
    }
};

const cardNameToComponentsMap = {
    WordCard: <WordCard/>,
    NumberCard: <NumberCard/>
};

class CardWrapper extends Component {
    resolveCard = () => {
        const currentCardName = (this.props.level % 2 === 0) ? WORD_CARD : NUMBER_CARD;
        this.props.setCardName(currentCardName);
        return cardNameToComponentsMap[currentCardName];
    };


    render() {
        const currentCard = this.resolveCard();

        return (
            <div className={style.cardwrapper}>
                <div>
                    <Rate/>
                    <CardHeader/>
                    <Timer/>
                </div>

                {currentCard}

                <div>
                    <CancelButton/>
                    <DoneButton/>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardWrapper);
