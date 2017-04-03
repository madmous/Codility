// Compute number of integers divisible by k in range [a..b]

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 6.4.0)
    
    let firstDivisible = 0;
    let lastDivisible = 0;
    
    if (A % K === 0) {
        firstDivisible = A;
    } else {
        firstDivisible = A + K - (A % K);
    }
    
    lastDivisible = B - (B % 2);
    
    if (firstDivisible > lastDivisible) {
        return 0;
    } else {
        return Math.floor(((lastDivisible - firstDivisible) / K) + 1);
    }
}