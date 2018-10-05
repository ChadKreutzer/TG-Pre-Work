import Airplane from './airplane';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(
    element =>
    console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`)
  );
}

displayFuelCapacity();

/* aside from reading closer to natural language, defalut export/import isn't
much different from module.export/require */