const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  const season = ['spring', 'summer', 'autumn', 'winter']
  if (arguments.length === 0){
    return "Unable to determine the time of year!";
  }else
   if(date && Date.parse(date) && Date.prototype.toString.call(new Date()) != date){

    // console.log(Date.prototype.getFullYear.call(date))
    // // console.log(date.getFullYear())
    // console.log(Date.prototype.getFullYear.call(date)) 
    // console.log(date.getFullYear()) 
    let month = date.getMonth()
    switch (month) {
      case 2:
        case 3:
          case 4:
        return season[0]
        case 5:
          case 6:
            case 7:
          return season[1]
          case 8:
            case 9:
              case 10:
            return season[2]
            case 0:
              case 1:
                case 11:
              return season[3]
      
      default:
        return 'Invalid date!';
    }

  }else{

 return 'Invalid date!';
  }
}

module.exports = {
  getSeason
};
