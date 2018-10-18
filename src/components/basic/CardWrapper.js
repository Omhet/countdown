import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from "react-redux";

import style from './CardWrapper.css';

import Rate from './Rate';
import CardHeader from './CardHeader';
import Timer from './Timer';
import CancelButton from './CancelButton';
import DoneButton from './DoneButton';
import CardInput from './CardInput';


// import * as actionCreators from '../../actions/actionCreators';


// const mapStateToProps = state => {
//   return { articles: state.articles };
// };
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }

class CardWrapper extends Component {
    render() {
        return (
            <div className={style.cardwrapper}>
                <div className={style.upper}>
                    <Rate />
                    <CardHeader />
                    <Timer />
                </div>
                <div>
                    <CardInput />
                </div>
                <div className={style.bottom}>
                    <CancelButton />
                    <DoneButton />
                </div>
            </div>
        );
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(CardWrapper);
export default CardWrapper;
