
export default class UserAge {
  constructor(age){
  this.years = age;
  this.days = age * 365;
  }
  displayEarthAge() {
    return this.years;
  }
  futureYears(futureAge) {

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