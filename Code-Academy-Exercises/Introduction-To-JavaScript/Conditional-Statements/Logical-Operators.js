let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

/* I've been playing with c at cs50 and thus I didn't at first do the deep equal
=== that you should always use unless you really need the shallow equal == */