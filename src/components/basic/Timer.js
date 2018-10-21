import React, {Component} from 'react';
import {Header, Icon} from "semantic-ui-react";

import BaseStyle from './Base.css';
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {maxTime: state.maxTime, levelStarted: state.level.started}
};

class Timer extends Component {
    state = {
        timer: null,
        currentTime: this.props.maxTime
    };

    componentDidMount() {
        let timer = setInterval(this.tick, 1000);
        this.setState({timer});
    }

    componentWillUnmount() {
        this.clearInterval(this.state.timer);
    }

    tick = () => {
        if (!this.props.levelStarted) {
            this.setState({
                currentTime: this.props.maxTime
            });
        } else {
            this.setState({
                currentTime: this.state.currentTime - 1
            });
        }
    }

    render() {
        return (
            <div className={BaseStyle.flex}>
                <Icon name='time'/>
                <Header className={BaseStyle.nomargin} size='medium'>{this.state.currentTime}</Header>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Timer);
