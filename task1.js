function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    let longestGap = 0;
    let actualGap = 0;
    let binary = N.toString(2);
    
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '0') {
            actualGap++;
        } else if (actualGap > longestGap) {
            longestGap = actualGap;
            actualGap = 0;
        }
    }
    
    return longestGap;
}