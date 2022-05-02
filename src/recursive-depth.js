const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr,count = 0) {
  
  let result = count;
  arr.forEach((arrDepth)=>{
    if(Array.isArray(arrDepth)){
   let depth = this.calculateDepth(arrDepth, count)
   result = Math.max(result,depth);
    }
    })  
       return result+1
     } 
 }

module.exports = {
  DepthCalculator
};
