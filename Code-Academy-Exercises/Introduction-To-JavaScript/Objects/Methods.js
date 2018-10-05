const retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat () {
    console.log(retreatMessage);
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};

alienShip.retreat();
alienShip.takeOff();

/* I actually learned about the new ES6 way of writing methonds inside objects
here. I knew about how to define classes, but I didn't know you could do it in
regular objects too. */