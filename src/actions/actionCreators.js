import * as actionTypes from "../constants/actionTypes";

export const levelUp = () => ({ type: actionTypes.LEVEL_UP });

export const setCardValue = value => ({ type: actionTypes.SET_CARD_VALUE, value: value });

export const setCardName = name => ({ type: actionTypes.SET_CARD_NAME, name: name });

