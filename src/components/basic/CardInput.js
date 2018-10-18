import React, {Component} from 'react';
import { connect } from "react-redux";
import {Input} from "semantic-ui-react";

import { changeValue } from '../../actions/actionCreators';



const mapDispatchToProps = dispatch => {
  return {
    changeValue: value => dispatch(changeValue(value))
  };
};


class CardInput extends Component {
    handleChange = (e) => {
        this.props.changeValue(e.target.value);
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
