import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import * as actionCreators from './actions/index';

import style from  './App.css';

// My Components
import CardWrapper from './components/basic/CardWrapper';

const mapStateToProps = state => {
  return { articles: state.articles };
};

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

class App extends Component {
  render() {
    return (
      <div className={style.App}>
          <CardWrapper />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);
