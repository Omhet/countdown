import React, {Component} from 'react';
import { connect } from "react-redux";
import {Input} from "semantic-ui-react";

import { setCardValue } from '../../actions/actionCreators';



const mapDispatchToProps = dispatch => {
  return {
      setCardValue: value => dispatch(setCardValue(value))
  };
};


class CardInput extends Component {
    handleChange = (e) => {
        this.props.setCardValue(e.target.value);
    };

    render() {
        return (
            <div>
                <Input onChange={this.handleChange} />
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(CardInput);
