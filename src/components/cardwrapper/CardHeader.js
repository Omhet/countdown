import React, { Component } from 'react';
import { connect } from "react-redux";

import {Header} from "semantic-ui-react";
import * as cardNames from '../../constants/cardNames'
import { FINAL_LEVEL } from "../../constants/common";

const mapStateToProps = state => {
  return { name: state.currentCard.name, level: state.level };
};

class CardHeader extends Component {
    getDescription = () => {
        if (this.props.level.number >= FINAL_LEVEL) return 'Всё!';

        switch (this.props.name) {
            case cardNames.WORD_CARD:
                return 'Найди слово';
            case cardNames.NUMBER_CARD:
                return 'Найди число';
            default:
                return '';
        }
    }
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
