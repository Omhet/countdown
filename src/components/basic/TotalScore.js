import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { score: state.score };
}

class TotalScore extends Component {
    state = {
        currentScore: 0
    }

    componentDidMount() {
        const cashedTotalScore = JSON.parse(localStorage.getItem('totalScore'));

        if (cashedTotalScore !== undefined) {
            if (this.props.score > cashedTotalScore) {
                localStorage.setItem('totalScore', this.props.score.toString());
                this.setState({
                    currentScore: this.props.score
                });
            } else {
                this.setState({
                    currentScore: cashedTotalScore
                });
            }
        } else {
            localStorage.setItem('totalScore', '0')            
        }
    }

    render() {
        return (
            <span>{this.state.currentScore}</span>
        );
    }
}

export default connect(mapStateToProps)(TotalScore);
