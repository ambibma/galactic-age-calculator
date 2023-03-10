
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
    expect(galacticAge.nextVenusBirthday()).toEqual(35.5);
  });

  test("it should return the years that have passed on Venus since an inputted past Earth Age", () =>{
    expect(galacticAge.pastVenusBirthday()).toEqual(4.8);
  });

  test('it should return the inputted years from Earth to Mars Years', ()=>{
    expect(galacticAge.toMarsYears()).toEqual(14.9);
  });
  
  test('it should return the inputted future Earth years on Mars until next Mars birthday', () =>{
    expect(galacticAge.nextMarsBirthday()).toEqual(11.7)
  });
  test("it should return the years that have passed on Mars since an inputted past Earth Age", () =>{
    expect(galacticAge.pastMarsBirthday()).toEqual(1.6);
  });
  test('it should return the inputted years from Earth to Jupiter Years', () =>{
    expect(galacticAge.toJupiterYears()).toEqual(2.4);
  });
  test("it should return the years that have yet to pass on Jupiter since an inputted future Earth Age", () =>{
    expect(galacticAge.nextJupiterBirthday()).toEqual(1.9);
  });
  test("it should return the years that have passed on Jupiter since an inputted past Earth Age", () =>{
    expect(galacticAge.pastJupiterBirthday()).toEqual(0.3)
  });


});