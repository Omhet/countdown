import {UPDATE_SCORE} from "../constants/actionTypes";

export default function score(state = 0, action) {
    switch (action.type) {
        case UPDATE_SCORE:
            return state + action.score;
        default:
            return state
    }
}