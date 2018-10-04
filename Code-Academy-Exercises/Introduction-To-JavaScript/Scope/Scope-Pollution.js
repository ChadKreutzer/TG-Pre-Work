const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

/* of course, you could have defined a new variable inside the function called
stars using either let or const which would then have just shadowed the global
stars inside callMyNightSky() without replacing it in the global space. Passing
a parameter called stars would also do the same thing. */