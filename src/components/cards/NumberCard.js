import React, { Component } from 'react';
import { Button } from "semantic-ui-react";
import * as style from "./Card.css";
import CellGroup from "./card-elements/CellGroup";
import CardInput from "./card-elements/CardInput";
import BaseStyle from "../basic/Base.css";
import { setCardValue, startLevel, setCardTarget } from "../../actions";
import { connect } from "react-redux";
import ButtonGroup from "./card-elements/ButtonGroup";
import * as numbers from "../../constants/numbers";
import { signs } from "../../constants/signs";
import { contains, calculateTargetNumberValue } from "../../helpers/helpers";

const MAX_NUMBERS_LENGTH = 6;

const mapStateToProps = state => {
    return { level: state.level, currentCard: state.currentCard };
};

const mapDispatchToProps = dispatch => {
    return {
        startLevel: () => dispatch(startLevel()),
        setCardValue: value => dispatch(setCardValue(value)),
        setCardTarget: target => dispatch(setCardTarget(target))
    };
};

class NumberCard extends Component {
    state = {
        target: '',
        numbers: [],
        currentValue: [],
        returnedValue: ''
    };

    componentWillReceiveProps(nextProps, s) {
        if (nextProps.level.number !== this.props.level.number) {
            this.setState({
                target: '',
                numbers: [],
                currentValue: [],
                returnedValue: ''
            })
        }
    }

    setLetterToState = numbers => {
        const randInd = Math.floor(Math.random() * numbers.length);
        const number = numbers[randInd];
        this.setState({
            numbers: [...this.state.numbers, number]
        },
            () => {
                if (this.props.level.started) {
                    const target = calculateTargetNumberValue(this.state.numbers);
                    this.props.setCardTarget(target);
                    this.setState({ target });
                }
            }
        );
    };

    startLevelIfHaveAllLetters = () => {
        if (this.state.numbers.length + 1 >= MAX_NUMBERS_LENGTH) {
            this.props.startLevel();
        }
    };

    getSmall = () => {
        this.startLevelIfHaveAllLetters();
        if (this.props.level.started) return false;
        this.setLetterToState(numbers.small);
    };

    getBig = () => {
        this.startLevelIfHaveAllLetters();
        if (this.props.level.started) return false;
        this.setLetterToState(numbers.big);
    };

    cellClick = value => {
        const lastValue = this.state.currentValue[this.state.currentValue.length - 1];

        if (!lastValue && contains(signs, value)) return false;
        if (lastValue && contains(signs, lastValue) && contains(signs, value)) return false;

        this.setState({
            currentValue: [...this.state.currentValue, value]
        }, () => this.props.setCardValue(this.state.currentValue.join('')));

    };


    popInputValue = () => {
        const currentValue = [...this.state.currentValue];
        const lastValue = this.state.currentValue[this.state.currentValue.length - 1];

        if (!lastValue) return false;

        currentValue.pop();

        this.setState({
            returnedValue: contains(signs, lastValue) ? '' : lastValue,
            currentValue
        }, () => this.props.setCardValue(this.state.currentValue.join('')))
    };

    render() {
        return (
            <div className={style.card}>
                <CellGroup
                    values={this.state.numbers}
                    maxLength={MAX_NUMBERS_LENGTH}
                    cellClick={this.cellClick}
                    returnedValue={this.state.returnedValue}
                    inputLastValue={this.state.currentValue[this.state.currentValue.length - 1]}
                />

                <ButtonGroup buttons={signs} buttonClick={this.cellClick} />

                <div>
                    <span className={BaseStyle.responsiveFont}>{this.state.target}</span>
                </div>

                <CardInput backspaceClick={this.popInputValue} value={this.state.currentValue.join(' ')} />

                <Button.Group >
                    <Button className={BaseStyle.responsiveFont} disabled={this.props.level.started}
                        onClick={this.getSmall}>Маленькое</Button>
                    <Button className={BaseStyle.responsiveFont} disabled={this.props.level.started}
                        onClick={this.getBig}>Большое</Button>
                </Button.Group>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NumberCard);
