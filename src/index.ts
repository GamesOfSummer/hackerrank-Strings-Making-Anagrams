import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function makeAnagram(a: string, b: string): number {
    let sortedAArray = a.split('');
    let sortedBArray = b.split('');

    let total = sortedAArray.length + sortedBArray.length;

    let pairs = 0;
    for (let i = 0; i < sortedAArray.length; i++) {
        for (let j = 0; j < sortedBArray.length; j++) {
            if (sortedAArray[i] === sortedBArray[j]) {
                sortedBArray.splice(j, 1);
                pairs++;
                break;
            }
        }
    }

    let pairs2 = pairs * 2;
    return total - pairs2;
}

consoleStart();

validateFxn(
    makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'),
    30
);

validateFxn(makeAnagram('showman', 'woman'), 2);

validateFxn(makeAnagram('cde', 'abc'), 4);

consoleEnd();
consoleBuffer();

export {};
