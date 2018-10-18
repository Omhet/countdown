import { CHANGE_VALUE } from "../constants/actionTypes";

export default function changeValue(state = { name: '', value: '' }, action) {
  console.log(state);
  switch (action.type) {
    case CHANGE_VALUE:
      return { ...state, value: action.value };
    default:
      return state
  }
}