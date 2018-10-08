  let availableAirplanes = [
    {
      name: 'AeroJet',
      fuelCapacity: 800,
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
      availableStaff: [
      'pilots',
      'flightAttendants'
      ]
    }
  ];
let flightRequirements = {
  requiredStaff: 4
};

const meetsStaffRequirements = (availableStaff, requiredStaff) =>
    availableStaff.length >= requiredStaff;

export { availableAirplanes, flightRequirements, meetsStaffRequirements };

/* Hmm. I just learned from doing a little research after doing this lesson that
with out something like Babel, ES6 modules are not compatible with CommonJS
modules. Of course there is a way, and apparently the eventual goal is to get
rid of CJS.
https://medium.com/@giltayar/native-es-modules-in-nodejs-status-and-future-directions-part-i-ee5ea3001f71
*/