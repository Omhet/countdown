import React, { Component } from 'react';
import {Header} from "semantic-ui-react";

class CardHeader extends Component {
    render() {
        return (
            <div>
                <Header size='large'>Найди число</Header>
            </div>
        );
    }
}

export default CardHeader;
