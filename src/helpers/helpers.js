import * as letters from '../constants/letters';
import {WORD_CARD} from "../constants/cardNames";
import {getYandexDicUrl} from "./apiUrls";
import { dispatch } from "react-redux";

import { isWord } from '../actions/index';

const POSITIVE = 'positive';
const NEGATIVE = 'negative';

const request = async url => {
  const response = await fetch(url);
  const json = await response.json();

  return json;
};

const contains = (arr, val) => {
    return (arr.indexOf(val) > -1);
};

export const getCellState = value => {
    if (contains(letters.vowels, value)) {
        return POSITIVE;
    } else if (contains(letters.consonants, value)) {
        return NEGATIVE;
    }
};

export const calculateScore = async (cardName, value) => {
    let score = 0;

    if (!value) return score;

    switch (cardName) {
        case WORD_CARD:
            score = await calculateScoreForWord(value);
            break;
        default:
            score = 0
    }

    return score;
};

export const calculateScoreForWord = async word => {
    const dicUrl = getYandexDicUrl(word);
    const res = await request(dicUrl);

    if (res && res.def && res.def.length > 0) {
        // dispatch(isWord(true));
        return word.length;
    }

    // dispatch(isWord(false));

    return 0;
};