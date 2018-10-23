import React, { Component } from 'react';
import { connect } from "react-redux";

import style from './CardWrapper.css';
import baseStyle from './Base.css';

import Rate from './Rate';
import CardHeader from './CardHeader';
import Timer from './Timer';
import CancelButton from './CancelButton';
import DoneButton from './DoneButton';
import WordCard from '../cards/WordCard';
import NumberCard from '../cards/NumberCard';
import * as cardNames from '../../constants/cardNames';

import * as actionCreators from '../../actions/index';
import {FINAL_LEVEL} from "../../constants/common";
import GameOverCard from "../cards/GameOverCard";

const mapStateToProps = state => {
  return { level: state.level };
};

const mapDispatchToProps = dispatch => {
    return {
        setCardName: name => dispatch(actionCreators.setCardName(name))
    }
};

const mapCardNamesToComponents = {
    WordCard: <WordCard/>,
    NumberCard: <NumberCard/>,
};

class CardWrapper extends Component {
    resolveCard = () => {
        const level = this.props.level.number;

        if (level >= FINAL_LEVEL) {
            return <GameOverCard/>
        }

        // const cardName = (this.props.level.number % 2 === 0) ? cardNames.WORD_CARD : cardNames.NUMBER_CARD;
        const cardName = cardNames.WORD_CARD;
        this.props.setCardName(cardName);
        return mapCardNamesToComponents[cardName];
    }

    render() {
        const currentCard = this.resolveCard();

        return (
            <div className={style.cardwrapper}>
                <div className={baseStyle.borderBottom}>
                    <Rate />
                    <CardHeader />
                    <div>
                        <Timer />
                    </div>
                </div>

                { currentCard }

                <div>
                    <CancelButton />
                    <DoneButton />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardWrapper);
