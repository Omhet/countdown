import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import style from  './App.css';

import Game from './components/basic/Game';
import Menu from './components/basic/Menu';


class App extends Component {
  render() {
    return (
      <div className={style.App}>
          <Switch>
              <Route exact path='/' component={Menu} />
              <Route exact path='/game' component={Game} />
          </Switch>
      </div>
    );
  }
}

export default App;
