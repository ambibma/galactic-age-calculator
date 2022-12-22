
import GalacticAge from "../src/earth";

describe('GalacticAge', () => {
  let galacticAge;
  beforeEach(() =>{
    galacticAge= new GalacticAge(28);
  });

  test('it should return an object with an inputted age in earth years & days',() => {
    expect(galacticAge.earthYears).toEqual(28);
    expect(galacticAge.earthDays).toEqual(10220);
  });

  test('it should return the inputted age', ()=>{
    expect(galacticAge.displayEarthAge(galacticAge.years)).toEqual(28);
  });

  test('it should return the future inputted age in earth years', ()=>{
    galacticAge.toFutureAge(50);
    expect(galacticAge.futureEarthAge).toEqual(50);
  });

  test('it should return the years between futureAge and userAge', ()=>{
    galacticAge.toFutureAge(50);
    expect(galacticAge.nextEarthBirthday()).toEqual(22);
  });

});