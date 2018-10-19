import { LEVEL_UP, SET_CARD_VALUE, SET_CARD_NAME } from "../constants/actionTypes";

export const levelUp = () => ({ type: LEVEL_UP });

export const setCardValue = value => ({ type: SET_CARD_VALUE, value: value });

export const setCardName = name => ({ type: SET_CARD_NAME, name: name });


