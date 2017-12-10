const calc = (route, maxRoute) => {
  const loopCount = Math.ceil(route.length / maxRoute) || 0;
  const resultArray = [];
  [...Array(loopCount)].map((_, i) => {
    const begin = (i === 0) ? i * maxRoute : i * maxRoute - 1;
    const end = (i + 1) * maxRoute;
    const newArray = route.slice(begin, end);
    resultArray.push(newArray);
  });
  return resultArray;
};

module.exports = calc;
