const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  }
};

robot.checkEnergy();

/* "The key takeaway from the example above is to avoid using arrow functions
when using this in a method!" <-- This. I totally agree that is why you want to
use the right tools for the right job and not just default to one style of
function or another. */