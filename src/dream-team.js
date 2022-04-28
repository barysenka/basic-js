const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  let arrNew  = [];
  let stringNew = '';
  if(arguments.length !== 0 && Array.isArray(members) && members !== null && members.length !== 0){
    members.forEach((name) =>{
      if( typeof name === "string" && name.trim() !== '' && name !== null ){
        arrNew.push(name.trim().slice(0,1).toUpperCase());
      }
    })
   
    stringNew = arrNew.sort().join('')
    return stringNew
  }
   else {
     return  false
    }
}

module.exports = {
  createDreamTeam
};
