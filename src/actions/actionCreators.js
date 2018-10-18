import * as actionTypes from "../constants/actionTypes";

export const levelUp = () => ({ type: actionTypes.LEVEL_UP });

export const changeValue = value => ({ type: actionTypes.CHANGE_VALUE, value: value });

