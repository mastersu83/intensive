const object = {
  foo: "bar",
  deep: {
    hested: {
      field: "baz",
    },
  },
};

const object1 = {
  foo: "bar",
  baz: [1, 2, 3],
  deep: [{ foobar: "42" }],
};

const get = (obj, str) => {
  if (!str.trim()) {
    console.log(obj);
    return;
  }
  let path = str.trim().split(".");
  let value = obj;
  path.map((i) => {
    value = value[i.trim()];
  });
  return value;
};

console.log(get(object, "deep"));
