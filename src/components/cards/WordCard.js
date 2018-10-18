import React, { Component } from 'react';
import CardInput from "../basic/CardInput";
import { Button } from "semantic-ui-react";
import style from './Card.css';

class WordCard extends Component {
    render() {
        return (
            <div className={style.card}>
                <CardInput/>
                <Button.Group>
                    <Button>Гласная</Button>
                    <Button>Согласная</Button>
                </Button.Group>
            </div>
        );
    }
}

export default WordCard;
