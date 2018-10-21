import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";

import style from './Menu.css';

class Menu extends Component {
    render() {
        return (
            <div className={style.menu}>
                <Link to='/game'><Icon name='play circle' size='massive'/></Link>
                <Button.Group>
                    <Button>Легко</Button>
                    <Button>Нормально</Button>
                    <Button>Сложно</Button>
                </Button.Group>
            </div>
        );
    }
}

export default Menu;
