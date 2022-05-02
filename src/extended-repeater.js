const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  
  const obj = {
   repeatTimes: 1,
   separator: '+',
   addition: '',
   additionRepeatTimes: 1,
   additionSeparator: '|',
   }
   for(let key in obj){
     if (options[key] !== undefined){
       obj[key] = options[key]
   }
  }

  let addStr = addReped(obj.addition, obj.additionRepeatTimes, obj.additionSeparator);
  addStr= String(str) + addStr;
  let resultStr = addReped(addStr, obj.repeatTimes, obj.separator);

   function addReped(strs, repeat, separatop){
    let arr=[]
   
    for(let i = 0; i< repeat; i++){
     arr.push(String(strs))
    }
     return arr.join(`${separatop}`)
  
    }
return resultStr
   }

module.exports = {
  repeater
};
