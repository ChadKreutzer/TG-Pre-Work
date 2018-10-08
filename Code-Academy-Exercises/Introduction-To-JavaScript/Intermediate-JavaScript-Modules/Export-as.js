let availableAirplanes = [
    {
      name: 'AeroJet',
      fuelCapacity: 800,
      maxSpeed: 1200,
      minSpeed: 300,
      availableStaff: [
      'pilots',
      'flightAttendants',
      'engineers',
      'medicalAssistance',
      'sensorOperators'
      ]
    },
    {
      name: 'SkyJet',
      fuelCapacity: 500,
      maxSpeed: 800,
      minSpeed: 200,
      availableStaff: [
      'pilots',
      'flightAttendants'
      ]
    }
  ];
let flightRequirements = {
  requiredSpeedRange: 700,
  requiredStaff: 4
};

const meetsStaffRequirements = (availableStaff, requiredStaff) =>
    availableStaff.length >= requiredStaff;

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  const range = maxSpeed - minSpeed;
  return range > requiredSpeedRange;
}

export {
  availableAirplanes as aircrafts,
  flightRequirements as flightReqs,
  meetsStaffRequirements as meetsStaffReqs,
  meetsSpeedRangeRequirements as meetsSpeedRangeReqs
};

/* Oy. I hope this doesn't mean I have to refactor all the variable/object names
without a find/replace functionality in the next lesson when I implement this. */