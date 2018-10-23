import React, {Component} from 'react';
import {Input} from "semantic-ui-react";

import { connect } from "react-redux";
import { setCardValue } from '../../actions/index';



const mapDispatchToProps = dispatch => {
  return {
    setCardValue: value => dispatch(setCardValue(value))
  };
};

const getValidationRegExp = values => {
    const value = values.join('');
    const regExp = new RegExp(`[^${value}]`, 'gi');
    
    return regExp;
}


class CardInput extends Component {

    state = {
        value: ''
    }  
   
    isValidValue = value => {
        const sortedValidValue = this.props.validValues.sort().join('').toLowerCase();
        const sortedInputValue = value.split('').sort().join('').toLowerCase();


        // const valid = (sortedValidValue.match(sortedInputValue) > -1) ? true : false;
        const valid = sortedValidValue.match(sortedInputValue);
        

        console.log({sortedValidValue, sortedInputValue, valid})

        return valid;
        
    }

    handleChange = (e) => {
        const regExp = getValidationRegExp(this.props.validValues);
        const trimmedValue = e.target.value.replace(/\s/g, '').slice(0, this.props.maxLength);

        if (!this.isValidValue(trimmedValue)) return false;

        this.setState({ value: trimmedValue });
        this.props.setCardValue(trimmedValue);
    }

    render() {
        return (
            <div>
                <Input value={this.state.value} onChange={this.handleChange} size='massive' />
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(CardInput);
