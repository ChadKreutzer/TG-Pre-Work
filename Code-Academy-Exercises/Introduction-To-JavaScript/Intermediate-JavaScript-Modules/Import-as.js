import { aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs }
  from './airplane';

function displayFuelCapacity() {
  aircrafts.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': '
      + element['fuelCapacity']);
  });
}

function displayStaffStatus() {
  aircrafts.forEach(function(element){
    console.log(element.name + ' meets staff requirements: '
      + meetsStaffReqs(element.availableStaff, flightReqs.requiredStaff));
  });
}

function displaySpeedRangeStatus() {
  aircrafts.forEach(function(element){
    console.log(element.name + 'meets speed range requirements: '
      + meetsSpeedRangeReqs(
          element.maxSpeed,
          element.minSpeed,
          flightReqs.requiredSpeedRange
        )
    );
  });
}

displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();

/* Well, that was not nearly as painful as I expected it to be. */