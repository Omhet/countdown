import React, { Component } from 'react';
import { Header, Icon } from "semantic-ui-react";
import BaseStyle from "./Base.css";

class Rate extends Component {
    render() {
        return (
            <div className={BaseStyle.flex}>
                <Header className={BaseStyle.nomargin} size='medium'>22</Header>
                <Icon name='paw'/>
            </div>
        );
    }
}

export default Rate;
