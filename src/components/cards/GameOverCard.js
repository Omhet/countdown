import React, { Component } from 'react';

import style from './Card.css';
import { connect } from "react-redux";
import TotalScore from "../basic/TotalScore";

const mapStateToProps = state => {
    return { score: state.score };
};

class GameOverCard extends Component {
    render() {
        const currentScore = this.props.score;
        // const record = (currentScore > localStorage.getItem('totalScore'))
        //                 ? <span className={style.smallheader}>Поздравляем!<br/><br/>Это ваш рекорд</span>
        //                 : '';

        return (
            <div className={style.gameOverCard}>
                <div>
                    <span className={style.bigheader}>Вы набрали: {currentScore}</span>
                </div>
                <div>
                    <span className={style.smallheader}>Ваш рекорд: <TotalScore/></span>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(GameOverCard);
