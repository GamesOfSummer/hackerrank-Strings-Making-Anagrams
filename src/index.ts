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

    for (let i = 0; i < aSet.size; i++) {
        let holderz = Array.from(aSet)[i];

        if (!bSet.has(holderz)) {
            duplicateSet.add(holderz);
        }
    }

    const holder3 = duplicateSet;

    for (let i = 0; i < bSet.size; i++) {
        let holderz = Array.from(bSet)[i];

        if (!aSet.has(holderz)) {
            duplicateSet.add(holderz);
        }
    }

    for (let i = 0; i < aSet.size; i++) {
        let holderz = Array.from(aSet)[i];

        if (!bSet.has(holderz)) {
            duplicateSet.add(holderz);
        }
    }

    //***************** */

    //***************** */

    //***************** */

    let counter = 0;
    for (let i = 0; i < aSet.size; i++) {
        let holderz = Array.from(aSet)[i];

        if (!duplicateSet.has(holderz)) {
            counter++;
        }
    }

    for (let i = 0; i < bSet.size; i++) {
        let holderz = Array.from(bSet)[i];

        if (!duplicateSet.has(holderz)) {
            counter++;
        }
    }

    return counter;
}

consoleStart();

validateFxn(
    makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'),
    30
);

validateFxn(makeAnagram('showman', 'woman'), 2);

validateFxn(makeAnagram('cde', 'abc'), 4);
validateFxn(makeAnagram('cdeee', 'abc'), 4);

consoleEnd();
consoleBuffer();

export {};
