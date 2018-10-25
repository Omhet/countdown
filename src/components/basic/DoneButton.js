import React, { Component } from 'react';
import { connect } from "react-redux";

import { Button, Icon } from "semantic-ui-react";
import BaseStyle from "./Base.css";

import { levelUp } from '../../actions/index';
import { calculateScore } from "../../helpers/helpers";
import { clearCardValue, stopLevel, updateScore, setWarning } from "../../actions";
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
        clearCardValue: () => dispatch(clearCardValue()),
        setWarning: warning => dispatch(setWarning(warning))
    };
};

class DoneButton extends Component {
    state = {
        loading: false
    }

    doneButtonClick = async () => {
        const { value, name } = this.props.currentCard;

        try {
            await this.setState({ loading: true });

            const score = await calculateScore(name, value);

            await this.setState({ loading: false });

            this.props.setWarning(score.warning);
            this.props.updateScore(score.value);
            setTimeout(() => this.props.setWarning(''), 1000)
            this.props.clearCardValue();
            this.props.stopLevel();
            this.props.levelUp();
        } catch(e) {
            alert('Check you internet connection');
            await this.setState({ loading: false });
        }
    };

    isGameOver = () => {
        return this.props.level.number >= FINAL_LEVEL;
    };

    render() {
        return (
            <div>
                <Button onClick={this.doneButtonClick} className={[BaseStyle.responsiveFont, BaseStyle.nomargin]}
                    animated
                    disabled={this.isGameOver() || this.state.loading}
                    loading={this.state.loading}
                    color='green'
                    size='massive'>
                    <Button.Content visible>Готово</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoneButton);
