import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from "react-redux";

// import * as actionCreators from './actions/actionCreators';

import style from  './App.css';

import CardWrapper from './components/basic/CardWrapper';

// const mapStateToProps = state => {
//   return { articles: state.articles };
// };
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }

class App extends Component {
  render() {
    return (
      <div className={style.App}>
          <CardWrapper />
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
