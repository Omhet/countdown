import React, {Component} from 'react';
import { Button } from "semantic-ui-react";
import * as style from "./Card.css";
import CellGroup from "../basic/CellGroup";
import CardInput from "./card-elements/CardInput";
import BaseStyle from "../basic/Base.css";
import * as numbers from "../../constants/numbers";
import { setCardValue, startLevel } from "../../actions";
import { connect } from "react-redux";
import ButtonGroup from "./card-elements/ButtonGroup";
import { signs } from "../../constants/signs";
import { contains } from "../../helpers/helpers";

const MAX_NUMBERS_LENGTH = 9;

const mapStateToProps = state => {
    return {level: state.level, currentCard: state.currentCard};
};

const mapDispatchToProps = dispatch => {
    return {
        startLevel: () => dispatch(startLevel()),
        setCardValue: value => dispatch(setCardValue(value))
    };
};

class NumberCard extends Component {
    state = {
        numbers: [],
        currentValue: [],
        returnedValue: ''
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.level.number !== this.props.level.number) {
            this.setState({
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
        });
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
                />

                <ButtonGroup buttons={signs} buttonClick={this.cellClick} />

                <CardInput backspaceClick={this.popInputValue} value={this.state.currentValue.join(' ')}/>

                <Button.Group >
                    <Button className={BaseStyle.responsiveFont}  disabled={this.props.level.started}
                            onClick={this.getSmall}>Маленькое</Button>
                    <Button className={BaseStyle.responsiveFont} disabled={this.props.level.started}
                            onClick={this.getBig}>Большое</Button>
                </Button.Group>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NumberCard);
