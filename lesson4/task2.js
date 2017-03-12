// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let result = -1;
    
    if (X > 0 && A.indexOf(X) !== -1 && A.length > 0) {
        let leavesPositions = new Set();
    
        let leavesPrositionsSize = 0;
        let expectedSum = 0;
        let actualSum = 0;
        
        let i = X;
        
        while(i > 0) {
            expectedSum += i;
            
            i--;
        }
        
        for (let i =0, len = A.length; i < len; i++) {
            leavesPositions.add(A[i]);
            
            if (leavesPositions.size !== leavesPrositionsSize) {
                actualSum += A[i];
                leavesPrositionsSize++;
            }
            
            if (actualSum === expectedSum) {
                result = i;
                break;
            }
        }
    }
    
    return result;
}