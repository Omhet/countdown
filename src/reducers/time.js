import {SET_MAX_TIME} from "../constants/actionTypes";

export default function maxTime(state = -1, action) {
    switch (action.type) {
        case SET_MAX_TIME:
            return action.maxTime;
        default:
            return state
    }
}