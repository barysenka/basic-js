const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
    this.alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(message, key, arg = 1) {
    if (!message || !key) {
      throw new Error(`Incorrect arguments!`);
    }
let messageNew = message.toUpperCase().split('');

let keyArr = key.repeat(Math.ceil(message.length / key.length)).toUpperCase().split('');
console.log(keyArr)
console.log('A'.charCodeAt())
let keyArrSymbol = [];

for (let i = 0; i < message.length; i++) {
  if (this.alph.includes(message.toUpperCase()[i])) {
    keyArrSymbol.push(keyArr.shift())
    messageNew.shift()
  } else {
    keyArrSymbol.push(messageNew.shift())
  }
}
console.log(keyArrSymbol)
let result = [];
let indexA = 'A'.charCodeAt()

    for (let i = 0; i < message.length; i++) {
      if (this.alph.includes(message.toUpperCase()[i])) {
        let indexKey = keyArrSymbol[i].charCodeAt() - indexA;
        let indexStr = message.toUpperCase()[i].charCodeAt() - indexA;
        let n;
        if (arg === 1) {
         n = indexA + (indexKey + indexStr) % 26
        }else {
          n = indexA + (indexStr - indexKey + 26) % 26
        }
        result.push(String.fromCharCode(n))
        
      } 
      else {
        result.push(message.toUpperCase()[i])
      }
    
    }

    if (this.type === true || this.type === undefined) {
      return result.join('')
    } else if (this.type === false) {
      return result.reverse().join('')
    }
}
  
  decrypt(message, key) {
   return  this.encrypt(message, key, -1)
  }
}

module.exports = {
  VigenereCipheringMachine
};
