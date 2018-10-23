import React, {Component} from 'react';
import {Button, Icon} from "semantic-ui-react";
import BaseStyle from "./Base.css";
import { Link } from "react-router-dom";
import { restartGame, stopLevel } from "../../actions";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
      restartGame: () => dispatch(restartGame()),
      stopLevel: () => dispatch(stopLevel())
  }
};

class CancelButton extends Component {
    cancelClick = () => {
        this.props.stopLevel();
        this.props.restartGame();
    };

    render() {
        return (
            <div>
                <Link to='/'>
                    <Button onClick={this.cancelClick} animated color='red' size='massive' className={BaseStyle.responsiveFont}>
                        <Button.Content visible>Ухожу</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow left'/>
                        </Button.Content>
                    </Button>
                </Link>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(CancelButton);
