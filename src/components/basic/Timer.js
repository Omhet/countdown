import React, {Component} from 'react';
import {Header, Icon} from "semantic-ui-react";

import BaseStyle from './Base.css';
import {connect} from "react-redux";
import {calculateScore} from "../../helpers/helpers";
import {levelUp, stopLevel, updateScore} from "../../actions";

const mapStateToProps = state => {
    return {
        maxTime: state.maxTime,
        levelStarted: state.level.started,
        currentCard: state.currentCard
    }
};

const mapDispatchToProps = dispatch => {
    return {
        levelUp: () => dispatch(levelUp()),
        stopLevel: () => dispatch(stopLevel()),
        updateScore: score => dispatch(updateScore(score))
    };
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

    nextLevel = async () => {
        const {value, name} = this.props.currentCard;

        const score = await calculateScore(name, value);

        this.props.updateScore(score);
        this.props.stopLevel();
        this.props.levelUp();
    };

    tick = () => {
        if (this.props.maxTime < 0) return false;

        if (this.state.currentTime === 0) {
            this.setState({
                currentTime: this.props.maxTime
            }, () => this.nextLevel());
        }

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
        const time = (this.props.maxTime < 0) ? '∞' : this.state.currentTime;

        return (
            <div className={BaseStyle.flex}>
                <Icon name='time'/>
                <Header className={BaseStyle.nomargin} size='medium'>{time}</Header>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
