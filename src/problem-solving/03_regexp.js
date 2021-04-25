/**
 * This test, tests some knowledge of Regular Expressions.
 *
 * See the test for what functions you need to implement.
 */


const answers  = {
     containsNumber : (str) => {
        const regex = /\d+/;
        return regex.test(str);
    },
    containsRepeatingLetter : (str) => {
        const regex = /([a-z])\1/i;
        return regex.test(str);
    },
    endsWithVowel : (str) => {
        const regex = /^.*[aeiouAEIOU]$/;
        return regex.test(str);
    },
    captureThreeNumbers : (str) => {
        const regex = /\d{3}/;
        return str.match(regex)?str.match(regex)[0]:false;
    },
    matchesPattern : (str) => {
        const regex = /^\d{3}-\d{3}-\d{4}$/;
        return regex.test(str);
    },
    isUSD : (str) => {
        const regex = /^\$(([1-9]\d{0,2}(,\d{3})*)|(([1-9]\d*)?\d))(\.\d\d)?$/;
        return regex.test(str);
    }
}

export default answers;