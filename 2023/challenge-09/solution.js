function adjustLights(lights) {
  const result = lights.reduce(
    (res, currentLight) => {
      const comparison = +(currentLight == res.prevLight);
      return {
        res: res.res + comparison,
        prevLight: [currentLight, " "][comparison],
      };
    },
    { res: 0, prevLight: "" }
  ).res;

  return result;
}
