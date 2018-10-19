import React, { Component } from 'react';
import { connect } from "react-redux";

import {Header} from "semantic-ui-react";
import * as cardNames from '../../constants/cardNames'

const mapStateToProps = state => {
  return { name: state.currentCard.name };
};

class CardHeader extends Component {
    getDescription = () => {
        switch (this.props.name) {
            case cardNames.WORD_CARD:
                return 'Найди слово'
            case cardNames.NUMBER_CARD:
                return 'Найди число'
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
