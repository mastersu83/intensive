function nameSpace(a) {
  let obj = {};
  let tmp = obj;

  a.split(".").forEach((i) => {
    tmp = tmp[i] = {};
  });
  return obj;
}

const a = "a.b.c.d.e";

console.log(nameSpace(a));
