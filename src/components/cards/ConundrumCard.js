import React, {Component} from 'react';
import {Button} from "semantic-ui-react";
import * as style from './Card.css';
import CellGroup from './card-elements/CellGroup'

import * as letters from '../../constants/letters'
import {setCardValue, startLevel} from "../../actions";
import {connect} from "react-redux";
import CardInput from "./card-elements/CardInput";
import BaseStyle from "../../components/basic/Base.css";
import {getShuffledString} from "../../helpers/helpers";


const MAX_LETTERS_LENGTH = 9;

const mapStateToProps = state => {
    return {level: state.level, currentCard: state.currentCard};
};

const mapDispatchToProps = dispatch => {
    return {
        startLevel: () => dispatch(startLevel()),
        setCardValue: value => dispatch(setCardValue(value))
    };
};

class ConundrumCard extends Component {
    state = {
        letters: [],
        currentValue: '',
        returnedValue: ''
    };

    componentDidMount() {
        const word = 'авторадио';
        const shuffled = getShuffledString(word);
        this.setState(
            { letters: shuffled.split('') },
            () => this.props.startLevel()
        );
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.level.number !== this.props.level.number) {
            this.setState({
                letters: [],
                currentValue: '',
                returnedValue: ''
            })
        }
    }

    cellClick = value => {
        this.setState({
            currentValue: this.state.currentValue.concat(value)
        }, () => this.props.setCardValue(this.state.currentValue));

    };

    popInputValue = () => {
        const lastValue = this.state.currentValue[this.state.currentValue.length - 1];
        const currentValue = [...this.state.currentValue];

        currentValue.pop();

        this.setState({
            returnedValue: lastValue,
            currentValue: currentValue.join('')
        }, () => this.props.setCardValue(this.state.currentValue))
    };

    render() {
        return (
            <div className={style.card}>
                <CellGroup
                    values={this.state.letters}
                    maxLength={MAX_LETTERS_LENGTH}
                    cellClick={this.cellClick}
                    returnedValue={this.state.returnedValue}
                />

                <CardInput backspaceClick={this.popInputValue} value={this.state.currentValue}/>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConundrumCard);
