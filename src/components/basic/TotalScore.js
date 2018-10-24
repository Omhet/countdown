import React, { Component } from 'react';

// const mapStateToProps = state => {
//     return { totalScore: state.score.total };
// }

class TotalScore extends Component {
    state = {
        totalScore: 0
    }

    componentDidMount() {
        const cashedTotalScore = JSON.parse(localStorage.getItem('totalScore'));
        if (cashedTotalScore) {
            if (this.state.totalScore > cashedTotalScore) {
                localStorage.setItem('totalScore', this.state.totalScore.toString())            
            } else {
                this.setState({
                    totalScore: cashedTotalScore
                });
            }
        } else {
            localStorage.setItem('totalScore', '0')            
        }
    }

    render() {
        return (
            <span>{this.state.totalScore}</span>
        );
    }
}

export default TotalScore;
