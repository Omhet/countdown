import React, { Component } from 'react';
import {Header} from "semantic-ui-react";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return { level: state.level.number };
};

class Level extends Component {
    render() {
        return (
            <div>
                <Header size='medium'>Уровень: {this.props.level + 1}</Header>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Level);
