import {combineReducers} from 'redux';
import level from './level';
import currentCard from './currentCard';
import score from "./score";

export default combineReducers({
    level,
    currentCard,
    score
});
