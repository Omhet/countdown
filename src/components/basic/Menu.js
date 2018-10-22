import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";

import style from './Menu.css';
import {setMaxTime} from "../../actions";
import {connect} from "react-redux";
import {NORMAL_TIME} from "../../constants/maxTimes";

const mapDispatchToProps = dispatch => {
    return {
        setMaxTime: time => dispatch(setMaxTime(time))
    }
};

class Menu extends Component {
    easyClick = () => {

    };

    normalClick = () => {
        this.props.setMaxTime(NORMAL_TIME);
    };

    hardClick = () => {

    };

    render() {
        return (
            <div className={style.menu}>
                <Link to='/game'><Icon name='play circle' size='massive'/></Link>
                <Button.Group>
                    <Button onClick={this.easyClick}>Легко</Button>
                    <Button onClick={this.normalClick}>Нормально</Button>
                    <Button onClick={this.hardClick}>Сложно</Button>
                </Button.Group>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Menu);
