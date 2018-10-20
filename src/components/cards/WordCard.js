import React, { Component } from 'react';
import { Button } from "semantic-ui-react";
import * as style from './Card.css';
import CellGroup from '../basic/CellGroup'

import * as letters from '../../constants/letters'
import { setCardValue, startLevel } from "../../actions";
import { connect } from "react-redux";
import CardInput from "./card-elements/CardInput";

const MAX_LETTERS_LENGTH = 9;

const mapStateToProps = state => {
    return { level: state.level, currentCard: state.currentCard };
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
        currentValue: ''
    };

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
        if (this.props.level.started) {
            this.setState({
                currentValue: this.state.currentValue.concat(value)
            });
            this.props.setCardValue(this.state.currentValue);
        }
    };

    render() {
        return (
            <div className={style.card}>
                <CellGroup
                    values={this.state.letters}
                    maxLength={MAX_LETTERS_LENGTH}
                    cellClick={this.cellClick}
                />

                <CardInput value={this.state.currentValue}/>

                <Button.Group>
                    <Button onClick={this.getVowel}>Гласная</Button>
                    <Button onClick={this.getConsonant}>Согласная</Button>
                </Button.Group>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordCard);
