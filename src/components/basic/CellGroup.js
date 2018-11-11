import React, { Component } from 'react';

import Cell from './Cell';
import * as style from './Base.css';
import { getCellState } from "../../helpers/helpers";
import { connect } from "react-redux";

const EMPTY_FILL = ' ';


const mapStateToProps = state => {
    return { level: state.level };
};


class CellGroup extends Component {
    constructor(props) {
        super(props);

        const emptyValues = Array(props.maxLength).fill(EMPTY_FILL);

        this.state = {
            emptyValues,
            givenValues: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.returnedValue !== this.props.returnedValue) {
            const returnedValue = nextProps.returnedValue;
            if (returnedValue) {
                let givenValues = [...this.state.givenValues];

                givenValues = givenValues.join(',').replace(EMPTY_FILL, returnedValue).split(',');
                
                this.setState({
                    givenValues
                });
            }
        }
        if(nextProps.values !== this.props.values) {
            this.setState({
                givenValues: nextProps.values
            });
        }
    }

    cellClick = (index, value) => {
        if (this.props.level.started) {
            const newGivenValues = [...this.state.givenValues];
            newGivenValues[index] = EMPTY_FILL;

            this.setState({
                givenValues: newGivenValues
            });

            this.props.cellClick(value);
        }
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
