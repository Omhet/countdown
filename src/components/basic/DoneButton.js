import React, {Component} from 'react';
import {connect} from "react-redux";

import {Button, Icon} from "semantic-ui-react";
import BaseStyle from "./Base.css";

import {levelUp} from '../../actions/index';
import {calculateScore} from "../../helpers/helpers";
import { clearCardValue, stopLevel, updateScore } from "../../actions";
import { FINAL_LEVEL } from "../../constants/common";

const mapStateToProps = state => {
    return {
        currentCard: state.currentCard,
        score: state.score,
        level: state.level
    };
};

const mapDispatchToProps = dispatch => {
    return {
        levelUp: () => dispatch(levelUp()),
        stopLevel: () => dispatch(stopLevel()),
        updateScore: score => dispatch(updateScore(score)),
        clearCardValue: () => dispatch(clearCardValue())
    };
};

class DoneButton extends Component {
    doneButtonClick = async () => {
        const {value, name} = this.props.currentCard;

        const score = await calculateScore(name, value);

        this.props.updateScore(score);
        this.props.clearCardValue();
        this.props.stopLevel();
        this.props.levelUp();
    };

    isGameOver = () => {
        return this.props.level.number >= FINAL_LEVEL;
    };

    render() {
        return (
            <div>
                <Button onClick={this.doneButtonClick} className={ [BaseStyle.responsiveFont, BaseStyle.nomargin] }
                        animated
                        disabled={this.isGameOver()}
                        color='green'
                        size='massive'>
                    <Button.Content visible>Готово</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right'/>
                    </Button.Content>
                </Button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoneButton);
