import {
  availableAirplanes,
  flightRequirements,
  meetsStaffRequirements
}
  from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function (element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' +
      element['fuelCapacity']);
  });
}

function displayStaffStatus() {
  availableAirplanes.forEach(function (element) {
    console.log(element.name + ' meets staff requirements: ' +
      meetsStaffRequirements(
        element.availableStaff,
        flightRequirements.requiredStaff
      )
    );
  });
}

displayFuelCapacity();
displayStaffStatus();

/* The other side of the export from the previous lesson. As a side note, now I
realize that I was wrong when I thought I couldn't use import/export because I
was using an older version of node. */