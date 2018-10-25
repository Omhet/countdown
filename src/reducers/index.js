import {combineReducers} from 'redux';
import level from './level';
import currentCard from './currentCard';
import score from "./score";
import maxTime from "./time";
import warning from "./warning";


export default combineReducers({
    level,
    currentCard,
    score,
    maxTime,
    warning
});
