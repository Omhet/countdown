import React, {Component} from 'react';
import {Button, Icon} from "semantic-ui-react";
import BaseStyle from "./Base.css";


class CancelButton extends Component {
    render() {
        return (
            <div>
                <Button animated color='red' size='massive' className={BaseStyle.responsiveFont}>
                    <Button.Content visible>Ухожу</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow left'/>
                    </Button.Content>
                </Button>
            </div>
        );
    }
}

export default CancelButton;
