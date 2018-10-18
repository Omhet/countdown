import React, { Component } from 'react';

import Cell from './Cell';
import * as style from './Base.css';


class CellGroup extends Component {
    constructor(props) {
        super(props);

        const values = Array(props.maxLength).fill('*');

        this.state = {
            values
        }
    }

    render() {
        const updatedValues = this.props.values.concat(this.state.values.slice(this.props.values.length));
        const cells = updatedValues.slice(0, this.props.maxLength).map((v, i) => {
            return <Cell key={i} value={v}/>;
        });
        
        return (
            <div className={style.flex}>
                {cells}
            </div>
        );
    }
}

export default CellGroup;
