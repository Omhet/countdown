import { LEVEL_UP, DROP_LEVEL, START_LEVEL, STOP_LEVEL } from "../constants/actionTypes";

export default function level(state = { number: 0, started: false }, action) {
    // console.log(state);
    switch (action.type) {
        case LEVEL_UP:
            return {...state, number: state.number + 1 };
        case START_LEVEL:
            return {...state, started: true };
        case STOP_LEVEL:
            return {...state, started: false };
        case DROP_LEVEL:
            return {...state, number: 0 };
        default:
            return state
    }
}