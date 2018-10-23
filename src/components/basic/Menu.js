import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";

import style from './Menu.css';
import {setMaxTime} from "../../actions";
import {connect} from "react-redux";
import { EASY_TIME, HARD_TIME, NORMAL_TIME } from "../../constants/maxTimes";

const mapDispatchToProps = dispatch => {
    return {
        setMaxTime: time => dispatch(setMaxTime(time))
    }
};

class Menu extends Component {
    easyClick = () => {
        this.props.setMaxTime(EASY_TIME);
    };

    normalClick = () => {
        this.props.setMaxTime(NORMAL_TIME);
    };

    hardClick = () => {
        this.props.setMaxTime(HARD_TIME);
    };

    render() {
        return (
            <div className={style.menu}>
                <h1>Обратный Отсчет</h1>
                <Link to='/game'><Icon name='play circle' size='massive'/></Link>
                <Button.Group>
                    <Button className={[style.buttonEasy, style.button]} onClick={this.easyClick}>Легко</Button>
                    <Button className={[style.buttonNormal, style.button]} onClick={this.normalClick}>Нормально</Button>
                    <Button className={[style.buttonHard, style.button]} onClick={this.hardClick}>Сложно</Button>
                </Button.Group>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Menu);
