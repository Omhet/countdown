import React, { Component } from 'react';
import {Header} from "semantic-ui-react";
import Rate from "../basic/Rate";

class GameOverCard extends Component {
    render() {
        return (
            <div>
                <Header>Game Over</Header>
                Your score is
                <Rate />
            </div>
        );
    }
}

export default GameOverCard;
