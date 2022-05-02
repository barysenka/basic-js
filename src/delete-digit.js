const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let maxDig = 0;
  for(let i=0; i<n.toString().length; i++){
    let arr = n.toString().split('')
    arr.splice(i,1)
  let newDig =Number(arr.join(''))
   maxDig = Math.max(maxDig, newDig);
  }
  return maxDig
}

module.exports = {
  deleteDigit
};
