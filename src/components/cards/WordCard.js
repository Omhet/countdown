import React, { Component } from 'react';
import { Button } from "semantic-ui-react";
import * as style from './Card.css';
import CardInput from '../basic/CardInput'
import CellGroup from '../basic/CellGroup'

import * as letters from '../../constants/letters'

const MAX_LETTERS_LENGTH = 9;

class WordCard extends Component {
    state = {
        letters: []
    };

    getVowel = () => {
        const randInd = Math.floor(Math.random() * letters.vowels.length);
        const vowel = letters.vowels[randInd];
        this.setState({
            letters: [...this.state.letters, vowel]
        });
        
    }

    getConsonant = () => {
        const randInd = Math.floor(Math.random() * letters.consonants.length);
        const consonant = letters.consonants[randInd];
        this.setState({
            letters: [...this.state.letters, consonant]
        });
    }

    render() {
        return (
            <div className={style.card}>
                <CellGroup values={this.state.letters} maxLength={MAX_LETTERS_LENGTH}/>
                <CardInput maxLength={MAX_LETTERS_LENGTH} validValues={this.state.letters}/>
                <Button.Group>
                    <Button onClick={this.getVowel}>Гласная</Button>
                    <Button onClick={this.getConsonant}>Согласная</Button>
                </Button.Group>
            </div>
        );
    }
}

export default WordCard;
