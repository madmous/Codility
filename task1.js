function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    let longestGap = 0;
    let actualGap = 0;
    let binary = N.toString(2);
    
    while (N % 2 === 0) {
        N = Math.floor(N / 2);
    }
    
    while (N > 0) {
        if (N % 2 === 1) {
            if (actualGap > longestGap) {
                longestGap = actualGap;
            }
            
            actualGap = 0;
        } else {
            actualGap++;
        }
        
        N = Math.floor(N / 2);
    }
    
    return longestGap;
}