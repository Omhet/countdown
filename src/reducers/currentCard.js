import { SET_CARD_VALUE, SET_CARD_NAME } from "../constants/actionTypes";

export default function setValue(state = { name: '', value: '' }, action) {
  console.log(state);
  switch (action.type) {
    case SET_CARD_VALUE:    
      return { ...state, value: action.value };
    case SET_CARD_NAME:    
      return { ...state, name: action.name };
    default:
      return state
  }
}