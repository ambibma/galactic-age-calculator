
import UserAge from "../src/earth";

describe('UserAge', () => {
  let userAge;
  beforeEach(() =>{
    userAge = new UserAge(28);
  });

  test('it should return an object with an inputted age in earth years & days',() => {
    expect(userAge.years).toEqual(28);
    expect(userAge.days).toEqual(10220);
  });

  test('it should return the inputted age', ()=>{
    expect(userAge.displayEarthAge(userAge.years)).toEqual(28);
  });

  test('it should return the future inputted age in earth years', ()=>{
    userAge.futureYears(50);
    expect(userAge.futureAge).toEqual(50);
  });

  test('it should return the years between futureAge and userAge', ()=>{
    userAge.futureYears(50);
    expect(userAge.nextBirthday()).toEqual(22);
  })

});