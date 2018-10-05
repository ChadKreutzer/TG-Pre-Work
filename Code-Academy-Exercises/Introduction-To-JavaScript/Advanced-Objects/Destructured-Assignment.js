const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot;

functionality.beep();

const { beep } = robot.functionality;

beep();

/* I am enjoying this. Between get/set, Property Value Shorthand, and now
destructured assignment, I have learned stuff I didn't know before starting this
pre-work. */