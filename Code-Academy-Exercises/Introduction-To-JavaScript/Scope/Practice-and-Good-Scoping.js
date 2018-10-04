const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();

/* I get that it can avoid mistakes by not reusing variable names, but sometimes
I think that the code is more semantic if you use the logical name for what you
are talking about rather than having to come up with original names all the time.
*/