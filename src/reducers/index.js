import { combineReducers } from 'redux';
import level from './level';
import currentCard from './currentCard';

export default combineReducers({
  level,
  currentCard
});
