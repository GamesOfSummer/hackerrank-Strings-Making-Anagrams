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

    //***** */

    let bArray = b.split('');
    let bSet = new Set();
    for (let i = 0; i < bArray.length; i++) {
        bSet.add(bArray[i]);
    }

    //***** */

    const holder = aSet;
    const holder2 = bSet;
    //********************

    let duplicateSet = new Set();

    let counter = 0;
    for (let i = 0; i < aSet.size; i++) {
        if (!bSet.has(aSet[i])) {
            counter++;
            duplicateSet.add(aSet[i]);
        }
    }

    const holder3 = duplicateSet;

    for (let i = 0; i < bSet.size; i++) {
        if (!aSet.has(bSet[i]) && !duplicateSet.has(bSet[i])) {
            counter++;
            duplicateSet.add(bSet[i]);
        }
    }

    return counter;
}

consoleStart();

validateFxn(
    makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'),
    30
);

validateFxn(makeAnagram('cde', 'abc'), 4);
validateFxn(makeAnagram('cdeee', 'abc'), 4);

consoleEnd();
consoleBuffer();

export {};
