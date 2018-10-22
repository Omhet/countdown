import React, { Component } from 'react';
import {Header} from "semantic-ui-react";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return { score: state.score };
};

class Rate extends Component {
    render() {
        return (
            <div>
                <Header size='medium'>{this.props.score}</Header>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Rate);
