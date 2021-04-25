/**
 * Export a function named 'count'.
 * It should call the given callback every 10th of a second with a increment from given start to end integer
 * Return a function to prematurely cancel the counting process.
 *
 * @param {number} start - Given to callback first
 * @param {number} end - Stop when count reached this value
 * @param {function(number): void} callback - Called after each 100ms with an increment
 * @returns {function(): void} - Cancel countdown function
*/


export const count = (start,end,callback) => {
    const interval = setInterval(() => {
            if(start <= end)
                callback(start++)
            if(start === end)
                clearInterval(interval)
    }, 100);
}