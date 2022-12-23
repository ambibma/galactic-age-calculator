
export default class GalacticAge {
  constructor(age){
    this.earthYears = age;
    this.earthDays = age * 365;
  }
  displayEarthAge() {
    return this.earthYears;
  }
  toFutureAge(futureAge) {
    this.futureEarthAge = futureAge;
    return futureAge;
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
    return this.mercuryYears;
  }
  nextMercuryBirthday(){
    return parseFloat((((this.futureEarthAge /.24) - (this.earthYears / .24))).toFixed(1));
  }
  pastMercuryBirthday(){
    return parseFloat((((this.earthYears-this.pastEarthAge)/ .24)).toFixed(1));
  }
  toVenusAge(){
    return this.venusYears = parseFloat(((this.earthYears / .62)).toFixed(1));
  }
  nextVenusBirthday(){
    return parseFloat(((this.futureEarthAge /.62) - (this.earthYears/ .62)).toFixed(1));
  }
  pastVenusBirthday(){
    return parseFloat(((this.earthYears - this.pastEarthAge)/.62).toFixed(1));
  }
  toMarsYears(){
    return parseFloat(((this.earthYears/1.88)).toFixed(1));
  }
  nextMarsBirthday(){
    return parseFloat(((this.futureEarthAge / 1.88) - (this.earthYears / 1.88)).toFixed(1));
  }
  pastMarsBirthday(){
    return parseFloat(((this.earthYears - this.pastEarthAge)/1.88).toFixed(1));
  }
  toJupiterYears(){
    return parseFloat(((this.earthYears/11.86)).toFixed(1))
  }
  nextJupiterBirthday(){
    return parseFloat(((this.futureEarthAge - this.earthYears)/11.86).toFixed(1));
  }
  pastJupiterBirthday(){
    return parseFloat(((this.earthYears - this.pastEarthAge)/11.86).toFixed(1));
  }
}
