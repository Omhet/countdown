import * as letters from '../constants/letters';
import * as numbers from '../constants/numbers';
import { signs } from '../constants/signs';
import { WORD_CARD, NUMBER_CARD } from "../constants/cardNames";
import { getYandexDicUrl } from "./apiUrls";

const POSITIVE = 'positive';
const NEGATIVE = 'negative';

const request = async url => {
    const response = await fetch(url);
    const json = await response.json();

    return json;
};

export const contains = (arr, val) => {
    return (arr.indexOf(val) > -1);
};

export const getCellState = value => {
    if (contains(letters.vowels, value)) {
        return POSITIVE;
    } else if (contains(letters.consonants, value)) {
        return NEGATIVE;
    } else if (contains(numbers.small, value)) {
        return NEGATIVE;
    } else if (contains(numbers.big, value)) {
        return POSITIVE;
    }
};

export const calculateScore = async ({ name, value, target }) => {
    let score = { warning: '', value: 0 };

    if (!value) return score;

    switch (name) {
        case WORD_CARD:
            score = await calculateScoreForWord(value);
            break;
        case NUMBER_CARD:
            score = calculateScoreForNumber(value, target);
            break;
        default:
            break;
    }

    return score;
};

export const calculateScoreForNumber = (expr, target) => {
    const userValue = eval(expr);
    const diff = Math.abs(target - userValue);

    let value = 0;
    let warning = '';

    if (diff === 0) value = 10;
    else if (diff > 0 && diff < 10) value = 5;
    else if (diff > 10 && diff < 20) value = 2;
    else {
        value = 0;
        warning = `Ваш результат ${userValue} слишком далек от цели ${target}`;
    }
    
    return { value, warning };
}

export const calculateScoreForWord = async word => {
    const dicUrl = getYandexDicUrl(word);
    const res = await request(dicUrl);

    if (res && res.def && res.def.length > 0) {
        return { warning: '', value: word.length };
    }

    return { warning: 'В нашем словаре нет такого слова :(', value: 0 };
};

export const getRandomElementFromArray = arr => {
    const randInd = Math.floor(Math.random() * arr.length);
    return arr[randInd];
}

const isValidTargetNumber = target => {
    return target.indexOf('.') === -1 && target.indexOf('-') === -1 && target.length === 3;
}

export const calculateTargetNumberValue = numbers => {
    while (true) {
        const expr = numbers.map((n, i) => {
            const sign = getRandomElementFromArray(signs);

            return (i < numbers.length - 1) ? n + sign : n;
        });

        const target = eval(expr.join('')).toString();
        if (isValidTargetNumber(target)) return target;
    }
}

