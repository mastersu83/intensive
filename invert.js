const obj = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  5: "five",
};

const invert1 = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
};

console.log(invert1(obj));

const invert2 = (obj) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    return { ...acc, [value]: key };
  }, {});
};
console.log(invert2(obj));

const invert3 = (obj) => {
  let invertObj = {};
  for (let key in obj) {
    invertObj[obj[key]] = key;
  }
  return invertObj;
};

console.log(invert3(obj));
