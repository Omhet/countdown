import {SET_MAX_TIME} from "../constants/actionTypes";
import {NORMAL_TIME} from "../constants/maxTimes";

export default function maxTime(state = NORMAL_TIME, action) {
    switch (action.type) {
        case SET_MAX_TIME:
            return action.time;
        default:
            return state
    }
}