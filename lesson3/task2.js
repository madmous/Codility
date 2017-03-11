// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let valueByIndex = {};
    let result = 1;
    
    if (A.length > 0) {
        for (let i = 0; i < A.length; i++) {
            valueByIndex[A[i] - 1] = A[i];
        }
        
        for (let key in valueByIndex) {
            if (key != 0 && !valueByIndex.hasOwnProperty(key - 1)) {
                result = parseInt(key);
                break;
            }
            
            result = A[A.length - 1] + 1;
        }
    }
    
    return result;
}