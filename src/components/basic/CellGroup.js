import React, { Component } from 'react';

import Cell from './Cell';
import * as style from './Base.css';
import { getCellState } from "../../helpers/helpers";
import { connect } from "react-redux";


const mapStateToProps = state => {
    return { level: state.level };
};


class CellGroup extends Component {
    constructor(props) {
        super(props);

        const emptyValues = Array(props.maxLength).fill('*');

        this.state = {
            emptyValues,
        }
    }

    render() {
        const updatedValues = this.props.values.concat(this.state.emptyValues.slice(this.props.values.length));

        const cells = updatedValues.slice(0, this.props.maxLength).map((value, i) => {
            return <Cell
                index={i}
                key={i}
                hidden={!this.props.level.started}
                state={getCellState(value)}
                value={value}
                cellClick={index => this.props.cellClick(updatedValues[index])}/>;
        });
        
        return (
            <div className={style.flex}>
                {cells}
            </div>
        );
    }
}

export default connect(mapStateToProps)(CellGroup);
