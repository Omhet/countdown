import React, {Component} from 'react';
import { Button } from "semantic-ui-react";

class NumberCard extends Component {
    render() {
        return (
            <div>
                <Button animated color='red'>Маленькое</Button>
            </div>
        );
    }
}

export default NumberCard;
