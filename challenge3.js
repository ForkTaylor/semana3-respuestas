function mcm (a, b) {

  let largerValue = a > b ? a : b;
  let smallerValue = a < b ? a : b;

  let lcm = largerValue;

  while (lcm % smallerValue !== 0) {
    lcm += largerValue;
  }

  return lcm;

};

module.exports = mcm;