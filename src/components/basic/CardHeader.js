import React, { Component } from 'react';
import {Header} from "semantic-ui-react";
import { NUMBER_CARD, WORD_CARD } from "../../constants/cardNames";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { cardName: state.currentCard.name };
};

class CardHeader extends Component {
    getDescription = () => {
        switch (this.props.cardName) {
            case WORD_CARD:
                return 'Найди слово';
            case NUMBER_CARD:
                return 'Найди число';
            default:
                return '';
        }
    };

    render() {
        const description = this.getDescription();

        return (
            <div>
                <Header size='large'>{description}</Header>
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(CardHeader);
