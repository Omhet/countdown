import React, { Component } from 'react';
import { Button } from "semantic-ui-react";
import BaseStyle from "../../basic/Base.css";

const ButtonWithValue = ({ value, buttonClick }) => {
  return (
    <Button  className={BaseStyle.responsiveFont} size='massive' onClick={() => buttonClick(value)}>{value}</Button>
  );
};

class ButtonGroup extends Component {

    render() {
        const buttons = this.props.buttons.map(b => {
            return  <ButtonWithValue value={b} buttonClick={this.props.buttonClick} />
        });

        return (
            <div>
                <Button.Group>
                    { buttons }
                </Button.Group>
            </div>
        );
    }
}

export default ButtonGroup;
