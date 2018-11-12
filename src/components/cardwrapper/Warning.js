import React, { Component } from 'react';

const style = {
    warning: {
        fontSize: '2em',
        color: '#9F6000',
        padding: '0',
        backgroundColor: '#FEEFB3'

    }
}

class Warning extends Component {
    render() {
        const padding = (this.props.message) ? '1em' : '0';

        return (
            <div style={{...style.warning, padding}}>
                {this.props.message}
            </div>
        );
    }
}

export default Warning;
