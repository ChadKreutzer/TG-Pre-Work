function robotFactory(model, mobile) {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  };
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false);
console.log(newRobot.model);
console.log(newRobot.mobile);

/* I did not know this! Honestly, I thought that this was an error in the into
to this section. This is quite cool. Yet another cool thing about ES6*/