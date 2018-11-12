import React, { Component } from 'react';
import {connect} from "react-redux";
import WordCard from "../cards/WordCard";
import NumberCard from "../cards/NumberCard";
import {FINAL_LEVEL} from "../../constants/common";
import GameOverCard from "../cards/GameOverCard";
import {CARD_NAMES} from "../../constants/cardNames";
import {setCardName} from "../../actions";
import {getElementFromCycledArray} from "../../helpers/helpers";
import ConundrumCard from "../cards/ConundrumCard";
import * as cardNames from "../../constants/cardNames";

const mapStateToProps = state => {
    return { level: state.level };
};

const mapDispatchToProps = dispatch => {
    return {
        setCardName: name => dispatch(setCardName(name))
    }
};

const cards = {
    WordCard: <WordCard/>,
    NumberCard: <NumberCard/>,
    ConundrumCard: <ConundrumCard/>
};

class CardResolver extends Component {
    resolveCard = () => {
        const level = this.props.level.number;

        if (level >= FINAL_LEVEL) {
            return <GameOverCard/>
        }

        // const cardName = getElementFromCycledArray(CARD_NAMES, level);
        // const cardName = cardNames.WORD_CARD;
        // const cardName = cardNames.NUMBER_CARD;
        const cardName = cardNames.CONUNDRUM_CARD;
        this.props.setCardName(cardName);
        return cards[cardName];
    }

    render() {
        return this.resolveCard();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardResolver);
