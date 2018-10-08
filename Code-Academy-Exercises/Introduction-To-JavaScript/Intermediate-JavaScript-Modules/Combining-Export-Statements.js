export let availableAirplanes = [
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
export let flightRequirements = {
  requiredSpeedRange: 700,
  requiredStaff: 4
};

export const meetsStaffRequirements = (availableStaff, requiredStaff) =>
    availableStaff.length >= requiredStaff;

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  const range = maxSpeed - minSpeed;
  return range > requiredSpeedRange;
}

export default meetsSpeedRangeRequirements;

/* Now this it had not occurred to me to do. But I guess as they say, it is
usually not a good thing to do anyhow. So not a big deal. I'm sure if the need
had come up I would have found it on stackoverflow or some other source. */