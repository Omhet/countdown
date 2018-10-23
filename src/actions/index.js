import {
    LEVEL_UP,
    SET_CARD_VALUE,
    SET_CARD_NAME,
    START_LEVEL,
    UPDATE_SCORE,
    STOP_LEVEL,
    SET_MAX_TIME, RESTART_GAME
} from "../constants/actionTypes";

export const levelUp = () => ({ type: LEVEL_UP });

export const setCardValue = value => ({ type: SET_CARD_VALUE, value: value });

export const setCardName = name => ({ type: SET_CARD_NAME, name: name });

export const startLevel = () => ({ type: START_LEVEL });

export const stopLevel = () => ({ type: STOP_LEVEL });

export const updateScore = score => ({ type: UPDATE_SCORE, score: score });

export const setMaxTime = time => ({ type: SET_MAX_TIME, time: time });

export const restartGame = () => ({ type: RESTART_GAME });



