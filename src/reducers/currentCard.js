import { SET_CARD_VALUE, SET_CARD_NAME, CLEAR_CARD_VALUE } from "../constants/actionTypes";

export default function setValue(state = { name: '', value: '' }, action) {
    switch (action.type) {
        case SET_CARD_VALUE:
            return { ...state, value: action.value };
        case CLEAR_CARD_VALUE:
            return { ...state, value: '' };
        case SET_CARD_NAME:
            return { ...state, name: action.name };
        default:
            return state
    }
}