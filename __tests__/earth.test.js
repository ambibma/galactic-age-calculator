
import {UserAge} from "../src/earth";

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
    
    expect(userAge.futureYears(50)).toEqual(50);
  });
  
  // test('it should return the amount of Earth years until next birthday calulated from userAge.years', ()=>{
  //   let futureAge = new FutureAge(50);
  //   let userAge = new UserAge(28);
  //   expect(futureAge.nextBirthday(userAge.years)).toEqual(22);
  // });
});