
import {UserAge, FutureAge } from "../src/earth";

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

});
describe('FutureAge', () =>{  
  test('it should return the future inputted age in earth years', ()=>{
    let futureAge = new FutureAge(50);
    expect(futureAge.years).toEqual(50);
  });
})