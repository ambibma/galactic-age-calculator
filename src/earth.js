export {UserAge, FutureAge}
class UserAge {
  constructor(age){
  this.years = age;
  this.days = age * 365;
  }
  displayEarthAge() {
    return this.years;
  }
  
}
class FutureAge {
  constructor(futureAge){
  this.futureYears = futureAge;
  this.futureDays = futureAge* 365;  
  }
}