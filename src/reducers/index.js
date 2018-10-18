// import { ADD_ARTICLE, LEVEL_UP, CHANGE_VALUE } from "../constants/action-types";

// const initialState = {
//   articles: [],
//   level: 0,
//   currentCard: {
//       name: '',
//       value: '',
//   }
// };


// const rootReducer = (state = initialState, action) => {
//     console.log(state);
//   switch (action.type) {
//     case ADD_ARTICLE:
//       return { ...state, articles: [...state.articles, action.payload] };
//     case LEVEL_UP:
//       return { ...state, level: ++state.level };
//     case CHANGE_VALUE:
//       return { ...state, currentCard: { ...currentCard, value: action.value} };
//     default:
//       return state;
//   }
// };

// export default rootReducer;

import { combineReducers } from 'redux';
import level from './level';
import currentCard from './currentCard';

export default combineReducers({
  level,
  currentCard
});
