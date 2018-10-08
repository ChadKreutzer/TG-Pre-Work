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

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  const range = maxSpeed - minSpeed;
  return range > requiredSpeedRange;
}

/* And this is where "named exports" really come into their own. not to mention
make it look a lot cleaner. Granted, there is something to be said about not
having to look through the entire code to find which functions/variables are
exported. */