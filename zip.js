const objects = [
  { foo: 5, bar: 6 },
  { foo: 13, baz: -1 },
];

function zip(...data) {
  const result = data.reduce((prevObj, currObj) => {
    Object.keys(currObj).forEach((k) => {
      if (!prevObj[k]) {
        prevObj[k] = currObj[k];
      }
    });
    return prevObj;
  }, {});
  console.log(result);
}

zip(...objects);
