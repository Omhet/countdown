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
            givenValues: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.values !== this.props.values) {
            this.setState({
                givenValues: nextProps.values
            });
        }
    }

    cellClick = index => {
        const newGivenValues = [...this.state.givenValues];
        newGivenValues[index] = '*';
        this.setState({
            givenValues: newGivenValues
        });
    };

    render() {
        const { emptyValues, givenValues } = this.state;
        const { values, maxLength } = this.props;

        const sliceOfEmptyValues = emptyValues.slice(values.length);
        const updatedValues = givenValues.concat(sliceOfEmptyValues);

        const limitedUpdatedValues = updatedValues.slice(0, maxLength);

        const cells = limitedUpdatedValues.map((value, i) => {
            return <Cell
                index={i}
                key={i}
                hidden={!this.props.level.started}
                state={getCellState(value)}
                value={value}
                cellClick={this.cellClick}/>;
        });
        
        return (
            <div className={style.flex}>
                {cells}
            </div>
        );
    }
}

export default connect(mapStateToProps)(CellGroup);
