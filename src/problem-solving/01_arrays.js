/**
 * Have a look at the test and implement the needed function, so the test will succeed
 */
export const sum = (array) => {
    return array.reduce((a,b)=>a+b);
}

export const concat = (a,b,c) => {
    return [...a,...b,...c];
}

export const count = (array,search) => {
    return array.reduce((count,a)=>count+(a === search),0)
}

export const duplicates = (array) => {
    const counter = array.reduce((a, b) => Object.assign(a, {[b]: (a[b] || 0) + 1}), {});
    return Object.keys(counter).filter(e=>counter[e]>1).map(Number)
}

export const square = (array) => {
    return array.map(e=>e*e);

}


