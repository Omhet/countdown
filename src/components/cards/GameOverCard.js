import React, { Component } from 'react';

import style from './Card.css';
import { connect } from "react-redux";
import TotalScore from "../basic/TotalScore";

const mapStateToProps = state => {
    return { score: state.score };
};

class GameOverCard extends Component {
    render() {
        return (
            <div className={style.gameOverCard}>
                <span>Вы набрали:</span>
                <span>{this.props.score}</span>
                <div>
                    <span>Ваш рекорд:</span>
                    <TotalScore/>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(GameOverCard);
