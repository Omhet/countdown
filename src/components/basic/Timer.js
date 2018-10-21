import React, { Component } from 'react';
import {Header, Icon} from "semantic-ui-react";

import BaseStyle from './Base.css';
import {connect} from "react-redux";

const mapStateToProps = state => {
    return { maxTime: state.maxTime }
};

class Timer extends Component {
    state = {
        currentTime: this.props.maxTime
    };

    render() {
        return (
            <div className={BaseStyle.flex}>
                <Icon name='time' />
                <Header className={BaseStyle.nomargin} size='medium'>{this.state.currentTime}</Header>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Timer);
