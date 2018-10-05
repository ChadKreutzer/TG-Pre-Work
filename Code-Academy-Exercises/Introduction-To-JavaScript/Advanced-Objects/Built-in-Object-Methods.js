const robot = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({ laserBlaster: true, voiceRecognition: true }, robot);

console.log(newRobot);

/* No new methods, although I've usually used Object.assign to clone objects
so that I don't mutate the original. I haven't really used the "adding more
properties" functionality of it. */