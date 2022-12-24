import GalacticAge from "./galacticAge";
import './css/styles.css';

let galacticAge = new GalacticAge();
debugger 
function handleFormSubmit(event){
  event.preventDefault();
  let age = document.getElementById('age').value;
  let futureAge = document.getElementById('futureAge').value;
  let pastAge = document.getElementById('pastAge').value;
  let results = document.querySelector('div.box');
  results.classList.remove('hidden');
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
  earthPast.innerText = galacticAge.pastEarthBirthday()


  galacticAge.earthYears = age;
  galacticAge.pastEarthAge = pastAge;
  galacticAge.futureEarthAge = futureAge;
  


}
document.getElementById("ageForm").addEventListener("submit", handleFormSubmit);