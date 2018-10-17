import React, {Component} from 'react';
import {Button, Icon} from "semantic-ui-react";
import BaseStyle from "./Base.css";

class DoneButton extends Component {
    render() {
        return (
            <div>
                <Button className={BaseStyle.nomargin}
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

export default DoneButton;
