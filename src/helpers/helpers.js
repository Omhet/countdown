import * as letters from '../constants/letters';
const POSITIVE = 'positive';
const NEGATIVE = 'negative';

const contains = (arr, val) => {
    return (arr.indexOf(val) > -1);
}

export const getCellState = value => {
    if (contains(letters.vowels, value)) {
        return POSITIVE;
    } else if (contains(letters.consonants, value)) {
        return NEGATIVE;
    }
};