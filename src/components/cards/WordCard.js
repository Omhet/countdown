import React, {Component} from 'react';
import {Button} from "semantic-ui-react";
import * as style from './Card.css';
import CellGroup from './card-elements/CellGroup'

import * as letters from '../../constants/letters'
import {setCardValue, startLevel} from "../../actions";
import {connect} from "react-redux";
import CardInput from "./card-elements/CardInput";
import BaseStyle from "../../components/basic/Base.css";


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

class WordCard extends Component {
    state = {
        letters: [],
        currentValue: '',
        returnedValue: ''
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.level.number !== this.props.level.number) {
            this.setState({
                letters: [],
                currentValue: '',
                returnedValue: ''
            })
        }
    }

    setLetterToState = letters => {
        const randInd = Math.floor(Math.random() * letters.length);
        const letter = letters[randInd];
        this.setState({
            letters: [...this.state.letters, letter]
        });
    };

    startLevelIfHaveAllLetters = () => {
        if (this.state.letters.length + 1 >= MAX_LETTERS_LENGTH) {
            this.props.startLevel();
        }
    };

    getVowel = () => {
        this.startLevelIfHaveAllLetters();
        if (this.props.level.started) return false;
        this.setLetterToState(letters.vowels);
    };

    getConsonant = () => {
        this.startLevelIfHaveAllLetters();
        if (this.props.level.started) return false;
        this.setLetterToState(letters.consonants);
    };

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

                <Button.Group >
                    <Button className={BaseStyle.responsiveFont}  disabled={this.props.level.started}
                            onClick={this.getVowel}>Гласная</Button>
                    <Button className={BaseStyle.responsiveFont} disabled={this.props.level.started}
                            onClick={this.getConsonant}>Согласная</Button>
                </Button.Group>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordCard);
