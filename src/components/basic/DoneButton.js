import React, {Component} from 'react';
import { connect } from "react-redux";

import {Button, Icon} from "semantic-ui-react";
import BaseStyle from "./Base.css";

import { levelUp } from '../../actions/index';
import {calculateScore} from "../../helpers/helpers";

const mapStateToProps = state => {
  return { currentCard: state.currentCard };
};

const mapDispatchToProps = dispatch => {
  return {
    levelUp: () => dispatch(levelUp())
  };
};

class DoneButton extends Component {
    doneButtonClick = async () => {
        const { value, name } = this.props.currentCard;
        console.log(this.props.currentCard)
        const score = await calculateScore(name, value);

        console.log(score);
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
