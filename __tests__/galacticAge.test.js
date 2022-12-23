
import GalacticAge from "../src/galacticAge";

describe('GalacticAge', () => {
  let galacticAge;
  beforeEach(() =>{
    galacticAge= new GalacticAge(28);
    galacticAge.toFutureAge(50);
    galacticAge.pastEarthBirthday(25);
  });

  test('it should return an object with an inputted age in earth years & days',() => {
    expect(galacticAge.earthYears).toEqual(28);
    expect(galacticAge.earthDays).toEqual(10220);
  });

  test('it should return the inputted age', ()=>{
    expect(galacticAge.displayEarthAge(galacticAge.years)).toEqual(28);
  });

  test('it should return the future inputted age in earth years', ()=>{
    expect(galacticAge.futureEarthAge).toEqual(50);
  });

  test('it should return the years between futureAge and userAge', ()=>{
    expect(galacticAge.nextEarthBirthday()).toEqual(22);
  });

  test('it should return the years between past inputted birthday', () =>{
    expect(galacticAge.pastEarthBirthday(25)).toEqual(3);
  });

  test('it should return the inputted years from Earth on Mercury', ()=>{
    galacticAge.toMercuryAge()
    expect(galacticAge.mercuryYears).toEqual(116.7);
  });

  test('it should return the inputted user age from days to Mercury days' , () =>{
    galacticAge.toMercuryAge();
    expect(galacticAge.mercuryDays).toEqual(175.1);
  });

  test('it should return the inputted future Earth years on Mercury until next Mercury birthday', ()=>{

    expect(galacticAge.nextMercuryBirthday()).toEqual(91.7);
  });

  test('it should return the years that have passed on Mercury since an inputted past Earth age', () =>{
    expect(galacticAge.pastMercuryBirthday()).toEqual(12.5);
  });

  test('it should return the inputted years from Earth on Venus ', () =>{
    expect(galacticAge.toVenusAge()).toEqual(45.2);
  })
  
  test('it should return the inputted future Earth years on Venus until next Venus birthday', () =>{
    expect(galacticAge.nextVenusBirthday().toEqual(35.5))
  });



});