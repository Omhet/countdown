import React, { Component } from 'react';
import { connect } from "react-redux";

import style from './CardWrapper.css';
import baseStyle from '../basic/Base.css';

import Rate from './Rate';
import CardHeader from './CardHeader';
import Timer from './Timer';
import CancelButton from './CancelButton';
import DoneButton from './DoneButton';
import WordCard from '../cards/WordCard';
import Warning from './Warning';
import NumberCard from '../cards/NumberCard';
import * as cardNames from '../../constants/cardNames';

import * as actionCreators from '../../actions/index';
import {FINAL_LEVEL} from "../../constants/common";
import GameOverCard from "../cards/GameOverCard";
import CardResolver from "./CardResolver";

const mapStateToProps = state => {
  return { warning: state.warning };
};

class CardWrapper extends Component {
    render() {
        return (
            <div className={style.cardwrapper}>
                <div className={baseStyle.borderBottom}>
                    <Rate />
                    <CardHeader />
                    <div>
                        <Timer />
                    </div>
                </div>
                <Warning message={this.props.warning} />
                <CardResolver/>
                <div>
                    <CancelButton />
                    <DoneButton />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(CardWrapper);
