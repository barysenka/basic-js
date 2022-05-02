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
  calculateDepth(arr) {
  let count = 0;
  let result = 0;
  
  return calculateCount(arr,count = 0)

   function calculateCount(arr,count = 0){
     if(Array.isArray(arr)){
       count++;
           if (arr.lenght === 0){
             return count
           }else{
             arr.forEach((e)=>{
             calculateCount(e,count)
             })
             }
           }
           result = Math.max(result,count);
          
       return result
     } 
   }
 }

module.exports = {
  DepthCalculator
};
