/**
 * Check if the given string is an anagram of a palindrom
 *
 * Example
 * s = 'aabbccdd'
 * One way this can be arranged into a palindrome is abcddcba. Return true.
 *
 * Constraints
 * contains only lowercase letters in the range ascii[a..z]
 */


export const isPalindromePossible = (str) => {
    if(str.length <= 1)
        return true;
    const countLetters = str.split('').reduce((acc, el) => Object.assign(acc, {[el]: (acc[el] || 0) + 1}), {});
    let oddLetterCount = Object.values(countLetters).filter(el => el % 2 >= 1).length;
    return oddLetterCount <= 1;
}