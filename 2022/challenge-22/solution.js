const solve = (systemNames, stepNumbers) => {
  return Object.entries(
    systemNames.reduce((obj, curr, index) => {
      const currentStep = stepNumbers[index];

      obj[curr]
        ? obj[curr].push(currentStep)
        : (obj[curr] = [currentStep]);

      return obj;
    }, {}),
  )
    .map((entry) => entry[1])
    .every((subarr) =>
      subarr.slice(1).every((item, index) => item > subarr[index]),
    );
};

module.exports = { solve };