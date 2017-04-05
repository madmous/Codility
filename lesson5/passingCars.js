// Count the number of passing cars on the road

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 6.4.0)
  
  let numberOfPairs = 0;
  let numberofZeros = 0;
  
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      numberofZeros++;
    } else {
      numberOfPairs += 1 * numberofZeros;
    }
    
    if (numberOfPairs > 1000000000) {
      return -1;
    }
  }
  
  return numberOfPairs;
}