import React, { Component } from 'react';
import {Header, Icon} from "semantic-ui-react";

import BaseStyle from './Base.css';

class Timer extends Component {
    render() {
        return (
            <div className={BaseStyle.flex}>
                <Icon name='time' />
                <Header className={BaseStyle.nomargin} size='medium'>30</Header>
            </div>
        );
    }
}

export default Timer;
