import {SET_MAX_TIME} from "../constants/actionTypes";

export default function maxTime(state = 30, action) {
    switch (action.type) {
        case SET_MAX_TIME:
            return action.time;
        default:
            return state
    }
}