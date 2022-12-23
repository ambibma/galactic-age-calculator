import { parse } from "@babel/core";

export default class galacticAge {
  constructor(age){
  this.earthYears = age;
  this.earthDays = age * 365;
  }
  displayEarthAge() {
    return this.earthYears;
  }
  toFutureAge(futureAge) {
    this.futureEarthAge = futureAge;
    return futureAge
  }
  nextEarthBirthday(){
    return this.futureEarthAge - this.earthYears;
  }
  pastEarthBirthday(pastAge){
    this.pastEarthAge = pastAge;
    return  this.earthYears - this.pastEarthAge;
  }
  toMercuryAge(){
    this.mercuryYears = parseFloat(((this.earthYears/ .24)).toFixed(1));
    this.mercuryDays = parseFloat((this.mercuryYears * 1.5).toFixed(1));
  }
  nextMercuryBirthday(){
    return parseFloat((((this.futureEarthAge /.24) - (this.earthYears / .24))).toFixed(1));
  }
  pastMercuryBirthday(){
    
  }

  // toVenusAge(){
    
  // }
}
// class FutureAge extends UserAge{
//   constructor(age){
//   super(this.futureYears = futureAge;
//   this.futureDays = futureAge* 365;  
//   }
//   nextBirthday(){
//   return this.futureYears - userAge.years;
//   }
// }