import {SET_WARNING} from "../constants/actionTypes";

export default function maxTime(state = '', action) {
    switch (action.type) {
        case SET_WARNING:
            return action.warning;
        default:
            return state
    }
}