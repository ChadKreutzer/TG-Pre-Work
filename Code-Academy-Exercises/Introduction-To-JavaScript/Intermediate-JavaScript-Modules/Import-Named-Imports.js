import {
  availableAirplanes,
  flightRequirements,
  meetsStaffRequirements,
  meetsSpeedRangeRequirements
  
}
  from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': '
      + element['fuelCapacity']);
  });
}

function displayStaffStatus() {
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets staff requirements: '
      + meetsStaffRequirements(
          element.availableStaff,
          flightRequirements.requiredStaff
        )
    );
  });
}

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element){
    console.log(element.name + 'meets speed range requirements: '
      + meetsSpeedRangeRequirements(
          element.maxSpeed,
          element.minSpeed,
          flightRequirements.requiredSpeedRange
        )
    );
  });
}

displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();

/* and now we implement the exports we named in the previous lesson. Also I like
how it has you practicing forEach and creating functions and such. Although I
don't like how it is forcing me to not use template strings or arrow functions
when I would naturally want to use them. */