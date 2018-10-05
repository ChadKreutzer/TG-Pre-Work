let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() { console.log('We got this!') },
      'favorite foods': ['cookies', 'cakes', 'candy', 'spinach']
    }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    backup: {
      battery: "Lithium",
      terabytes: 50
    }
  }
};

const capFave = spaceship
  .crew
  .captain['favorite foods'][0];

spaceship.passengers = [{
    name: 'Fred Jones',
    class: 'third'
  },
  {
    name: 'Larry Smith',
    class: 'first'
  },
  {
    name: 'Sally Horowitz',
    class: 'business'
  }
];

const firstPassenger = spaceship
  .passengers[0];

/* Shades of JSON! */