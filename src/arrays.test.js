import arrays from './arrays.js';

function getDefaultArray() {
    return [ 1, 2, 3, 4 ];
}

describe('arrays', () => {
    let a = getDefaultArray();

    beforeEach(() => {
        a = getDefaultArray();
    });

    test('you should be able to determine the location of an item in an array', () => {
        expect(arrays.indexOf(a, 3)).toEqual(2);
        expect(arrays.indexOf(a, 5)).toEqual(-1);
    });

    test('you should be able to add the values of an array', () => {
        expect(arrays.sum(a)).toEqual(10);
    });

    test('you should be able to remove a value from an array', () => {
        a.push(2);
        const result = arrays.remove(a, 2);
        expect(result).toHaveLength(3);
        expect(result).toEqual([ 1, 3, 4 ]);
        expect(a).toHaveLength(4);
        expect(a).toEqual(getDefaultArray());
    });

    test('you should be able to remove a value from an array, returning the original array', () => {
        const b = [1, 2, 2, 3, 4, 2, 2];
        const result = arrays.removeWithoutCopy(b, 2);

        expect(result).toHaveLength(3);
        expect(result).toEqual([1, 3, 4]);
        expect(b).toEqual([1, 3, 4]);
        expect(result).toBe(b);
    });

    test('you should be able to add an item to the end of an array', () => {
        const result = arrays.append(a, 10);
        expect(result).toHaveLength(5);
        expect(result[result.length - 1]).toEqual(10);
        expect(result).not.toEqual(a);
    });

    test('you should be able to remove the last item of an array', () => {
        const result = arrays.truncate(a);
        expect(result).toHaveLength(3);
        expect(result).toEqual([ 1, 2, 3 ]);
        expect(result).not.toEqual(a);
    });

    test('you should be able to add an item to the beginning of an array', () => {
        const result = arrays.prepend(a, 10);
        expect(result).toHaveLength(5);
        expect(result).toEqual([ 10, 1, 2, 3, 4 ]);
        expect(result).not.toEqual(a);
    });

    test('you should be able to remove the first item of an array', () => {
        const result = arrays.curtail(a);
        expect(result).toHaveLength(3);
        expect(result).toEqual([ 2, 3, 4 ]);
        expect(result).not.toEqual(a);
    });

    test('you should be able to join together two arrays', () => {
        const b = [ 'a', 'b' ];
        const c = [ 'c', 1 ];
        const result = arrays.concat(a, b, c);
        expect(result).toHaveLength(8);
        expect(result).toEqual([ 1, 2, 3, 4, 'a', 'b', 'c', 1 ]);
        expect(result).not.toEqual(a);
    });

    test('you should be able to add an item anywhere in an array', () => {
        const result = arrays.insert(a, 'z', 2);
        expect(result).toHaveLength(5);
        expect(result).toEqual([ 1, 2, 'z', 3, 4 ]);
        expect(result).not.toEqual(a);
    });

    test('you should be able to count the occurrences of an item in an array', () => {
        const result = arrays.count([ 1, 2, 4, 4, 3, 4, 3 ], 4);
        expect(result).toEqual(3);
    });

    test('you should be able to find duplicates in an array', () => {
        const result = arrays.duplicates([ 1, 2, 4, 4, 3, 3, 1, 5, 3 ]);

        expect(result).toHaveLength(3);
        expect(result.sort()).toEqual([ 1, 3, 4 ]);
        expect(result).not.toEqual(a);
    });

    test('you should be able to square each number in an array', () => {
        const result = arrays.square(a);
        expect(result).toHaveLength(4);
        expect(result).toEqual([1, 4, 9, 16]);
        expect(result).not.toEqual(a);
    });

    test('you should be able to find all indexes where an item occurrences in an array', () => {
        const result = arrays.findAllOccurrences('abcdefabc'.split(''), 'a');
        expect(result.sort()).toEqual([ 0, 6 ]);
        expect(result).not.toEqual(a);
    });
});
