// Count the number of passing cars on the road

function solution(A) {
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