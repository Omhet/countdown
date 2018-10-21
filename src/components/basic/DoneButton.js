import React, {Component} from 'react';
import {connect} from "react-redux";

import {Button, Icon} from "semantic-ui-react";
import BaseStyle from "./Base.css";

import {levelUp} from '../../actions/index';
import {calculateScore} from "../../helpers/helpers";
import {updateScore} from "../../actions";

const mapStateToProps = state => {
    return {currentCard: state.currentCard, score: state.score};
};

const mapDispatchToProps = dispatch => {
    return {
        levelUp: () => dispatch(levelUp()),
        updateScore: score => dispatch(updateScore(score))
    };
};

class DoneButton extends Component {
    doneButtonClick = async () => {
        const {value, name} = this.props.currentCard;

        const score = await calculateScore(name, value);

        this.props.updateScore(score);

    };

    render() {
        return (
            <div>
                <Button onClick={this.doneButtonClick} className={BaseStyle.nomargin}
                        animated
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
