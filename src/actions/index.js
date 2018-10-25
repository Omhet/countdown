import {
    LEVEL_UP,
    SET_CARD_VALUE,
    SET_CARD_NAME,
    START_LEVEL,
    UPDATE_SCORE,
    STOP_LEVEL,
    SET_MAX_TIME, DROP_LEVEL, DROP_SCORE, CLEAR_CARD_VALUE,
    // IS_WORD,
    SET_WARNING
} from "../constants/actionTypes";

export const levelUp = () => ({ type: LEVEL_UP });

export const setCardValue = value => ({ type: SET_CARD_VALUE, value: value });

export const clearCardValue = () => ({ type: CLEAR_CARD_VALUE });

export const setCardName = name => ({ type: SET_CARD_NAME, name: name });

export const startLevel = () => ({ type: START_LEVEL });

export const stopLevel = () => ({ type: STOP_LEVEL });

export const updateScore = score => ({ type: UPDATE_SCORE, score: score });

export const setMaxTime = time => ({ type: SET_MAX_TIME, time: time });

export const dropLevel = () => ({ type: DROP_LEVEL });

export const dropScore = () => ({ type: DROP_SCORE });

// export const isWord = bool => ({ type: IS_WORD, bool: bool });

export const setWarning = warning => ({ type: SET_WARNING, warning: warning });





