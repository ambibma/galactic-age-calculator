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
  constructor(){
    
  }
}