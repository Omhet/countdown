import React, {Component} from 'react';
import { connect } from "react-redux";

import {Button, Icon} from "semantic-ui-react";
import BaseStyle from "./Base.css";

import { levelUp } from '../../actions/actionCreators';

const mapStateToProps = state => {
  return { currentCard: state.currentCard };
};

const mapDispatchToProps = dispatch => {
  return {
    levelUp: () => dispatch(levelUp())
  };
};

class DoneButton extends Component {
    doneButtonClick = () => {
        console.log('click')
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
