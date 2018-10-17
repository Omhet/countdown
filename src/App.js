import React, { Component } from 'react';
import './App.css';

// My Components
import CardWrapper from './components/basic/CardWrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
          <CardWrapper />
      </div>
    );
  }
}

export default App;
