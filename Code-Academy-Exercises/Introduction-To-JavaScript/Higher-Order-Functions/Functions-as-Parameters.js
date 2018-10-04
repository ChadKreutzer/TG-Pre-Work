const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

function checkConsistentOutput(func, value) {
  const one = func(value);
  const two = func(value);
  return (one === two) ? one : 'This function returned inconsistent results';
}

checkConsistentOutput(addTwo, 4);

/* callback practice. And a good thing too. This is a concept that is important
especially in node and is often hard to grok. */