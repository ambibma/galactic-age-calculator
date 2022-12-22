
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
  toMercuryAge(){
    this.mercuryYears = this.earthYears/ .24;
    return parseFloat(this.mercuryYears.toFixed(1));
  }
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