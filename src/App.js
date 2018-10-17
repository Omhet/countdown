import React, { Component } from 'react';
import style from  './App.css';

// My Components
import CardWrapper from './components/basic/CardWrapper';

class App extends Component {
  render() {
    return (
      <div className={style.App}>
          <CardWrapper />
      </div>
    );
  }
}

export default App;
