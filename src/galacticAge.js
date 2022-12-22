
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
  pastEarthBirthday(){

  }
  toMercuryAge(){
    this.mercuryYears = parseFloat(((this.earthYears/ .24)).toFixed(1));
    this.mercuryDays = parseFloat((this.mercuryYears * 1.5).toFixed(1));
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