// Find the minimal nucleotide from a range of sequence DNA

function solution(S, P, Q) {
  // write your code in JavaScript (Node.js 6.4.0)
  let res = [];
  
  if (P.length === Q.length) {
    var factorsByLetter = {
      A: 1,
      C: 2,
      G: 3,
      T: 4
    }
    
    let minimalImpactFactor = null;
    let sequenceInNumbers = '';
    let all = '';
    
    for (let i = 0; i < P.length; i++) {
      all += S.substring(P[i], Q[i] + 1) + ',';
    }
    
    for (let i = 0; i < all.length; i++) {
      if (all.charAt(i) !== ',') {
        if (minimalImpactFactor === null) {
            minimalImpactFactor = factorsByLetter[all.charAt(i)];
        } else if (factorsByLetter[all.charAt(i)] < minimalImpactFactor) {
            minimalImpactFactor = factorsByLetter[all.charAt(i)];
        }
      } else {
        res.push(minimalImpactFactor);
        minimalImpactFactor = null;
      }
    }
  }
  
  return res;
}