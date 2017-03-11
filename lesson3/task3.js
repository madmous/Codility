// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)    
    if (A.length > 1) {
        let minimalDifference = null;
        let leftSum = A[0];
        let rightSum = 0;
        
        for (let i = 1; i < A.length; i++) {
            rightSum += A[i];
        }
        
        for (let i = 1; i < A.length; i++) {
            let difference = Math.abs(leftSum - rightSum);
            
            leftSum += A[i]
            rightSum -= A[i];
            
            if (!minimalDifference) {
                minimalDifference = difference;
            } else if (difference < minimalDifference) {
                minimalDifference = difference;
            }
        }
        
        return minimalDifference;
    }
}