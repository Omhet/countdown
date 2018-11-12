import React, { Component } from 'react';
import { Header, Icon } from "semantic-ui-react";

import BaseStyle from '../basic/Base.css';
import { connect } from "react-redux";
import { calculateScore } from "../../helpers/helpers";
import { levelUp, stopLevel, updateScore, clearCardValue, setWarning } from "../../actions/index";

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
        updateScore: score => dispatch(updateScore(score)),
        clearCardValue: () => dispatch(clearCardValue()),
        setWarning: warning => dispatch(setWarning(warning))
    };
};


class Timer extends Component {
    state = {
        timer: null,
        currentTime: this.props.maxTime
    };

    componentDidMount() {
        let timer = setInterval(this.tick, 1000);
        this.setState({ timer });
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    nextLevel = async () => {
        const { value, name } = this.props.currentCard;

        try {
            const score = await calculateScore(name, value);

            this.props.setWarning(score.warning);
            this.props.updateScore(score.value);
            setTimeout(() => this.props.setWarning(''), 1000)
            this.props.clearCardValue();
            this.props.stopLevel();
            this.props.levelUp();
        } catch(e) {
            alert('Check you internet connection');
        }
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
        const color = (this.state.currentTime <= 5) ? 'red' : '';

        return (
            <div className={BaseStyle.flex}>
                <Icon name='time'/>
                <Header className={BaseStyle.nomargin} size='medium'>
                    <span style={{color}}>{time}</span>
                </Header>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
