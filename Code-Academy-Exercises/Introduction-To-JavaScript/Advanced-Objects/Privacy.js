const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';

robot.recharge();

/* And even though I know this is convention (even in other languages, like C#)
I haven't really bothered much using the _name pattern in JS because of this. */