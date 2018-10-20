import { LEVEL_UP, START_LEVEL } from "../constants/actionTypes";

export default function level(state = { number: 0, started: false }, action) {
    // console.log(state);
    switch (action.type) {
        case LEVEL_UP:
            return {...state, number: state.number + 1 };
        case START_LEVEL:
            return {...state, started: true };
        default:
            return state
    }
}