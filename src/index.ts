import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function makeAnagram(a: string, b: string): number {
    // break into arrays - hash set arrays of unique characters
    let aArray = a.split('');
    let aSet = new Set();
    for (let i = 0; i < aArray.length; i++) {
        aSet.add(aArray[i]);
    }

    const holder = aSet;

    //********************
    return 4;
}

consoleStart();

validateFxn(makeAnagram('cde', 'abc'), 4);
validateFxn(makeAnagram('cdeee', 'abc'), 4);

consoleEnd();
consoleBuffer();

export {};
