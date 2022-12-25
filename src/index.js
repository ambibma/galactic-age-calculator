import GalacticAge from "./galacticAge";
import './css/styles.css';

function handleFormSubmit(event){
  event.preventDefault();
  let age = document.getElementById('age').value;
  let futureAge = document.getElementById('futureAge').value;
  let pastAge = document.getElementById('pastAge').value;
  let warning = document.getElementById("warning");
  let galacticAge = new GalacticAge(); 
    if(age > pastAge && age < futureAge){
      warning.classList.add('hidden');
      let resultsPast = document.getElementById('pastResults');
      let resultsPresent = document.getElementById('presentResults');
      let resultsFuture = document.getElementById('futureResults');
      resultsPast.classList.remove('hidden');
      resultsPresent.classList.remove('hidden');
      resultsFuture.classList.remove('hidden');
      const earthPast = document.getElementById('earthPast');
      const mercuryPast = document.getElementById('mercuryPast');
      const venusPast = document.getElementById('venusPast');
      const marsPast = document.getElementById('marsPast');
      const jupiterPast = document.getElementById('jupiterPast');
      const earthPresent = document.getElementById('earthPresent');
      const mercuryPresent = document.getElementById('mercuryPresent');
      const venusPresent = document.getElementById('venusPresent');
      const marsPresent = document.getElementById('marsPresent');
      const jupiterPresent = document.getElementById('jupiterPresent');
      const earthFuture = document.getElementById('earthFuture');
      const mercuryFuture = document.getElementById('mercuryFuture');
      const venusFuture = document.getElementById('venusFuture');
      const marsFuture = document.getElementById('marsFuture');
      const jupiterFuture = document.getElementById('jupiterFuture');
      const inputtedPastAge = document.getElementById('inputtedPastAge')
      const inputtedPresentAge = document.getElementById('inputtedPresentAge');
      const inputtedFutureAge = document.getElementById('inputtedFutureAge');
      galacticAge.earthYears = age;
      galacticAge.pastEarthAge = pastAge;
      galacticAge.futureEarthAge = futureAge;
      inputtedPastAge.innerText = galacticAge.pastEarthAge; 
      inputtedPresentAge.innerText = galacticAge.earthYears; 
      inputtedFutureAge.innerText = galacticAge.futureEarthAge;
      earthPast.innerText = galacticAge.pastEarthBirthday(pastAge);
      mercuryPast.innerText = galacticAge.pastMercuryBirthday();
      venusPast.innerText = galacticAge.pastVenusBirthday();
      marsPast.innerText = galacticAge.pastMarsBirthday();
      jupiterPast.innerText = galacticAge.pastJupiterBirthday();
      earthPresent.innerText = galacticAge.displayEarthAge();
      mercuryPresent.innerText = galacticAge.toMercuryAge();
      venusPresent.innerText = galacticAge.toVenusAge();
      marsPresent.innerText = galacticAge.toMarsYears();
      jupiterPresent.innerText = galacticAge.toJupiterYears();
      earthFuture.innerText = galacticAge.nextEarthBirthday();
      mercuryFuture.innerText = galacticAge.nextMercuryBirthday();
      venusFuture.innerText = galacticAge.nextVenusBirthday();
      marsFuture.innerText = galacticAge.nextMarsBirthday();
      jupiterFuture.innerText = galacticAge.nextJupiterBirthday();
    } else{
      warning.classList.remove('hidden');
      
    }
  document.getElementById("ageForm").reset();
}
document.getElementById("ageForm").addEventListener("submit", handleFormSubmit);