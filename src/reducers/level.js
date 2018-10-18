import { LEVEL_UP } from "../constants/actionTypes";

export default function level(state = 0, action) {
  switch (action.type) {
    case LEVEL_UP:
      return state + 1;
    default:
      return state
  }
}