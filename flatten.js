const list = [
  1,
  "any [complex] string",
  null,
  function () {},
  [1, 2, [3, "4"], 0],
  [],
  { a: 1 },
];

const list2 = [0, [1, [2, 3]], 4];

function flattenRecursion(list) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

function flatten(list) {
  const tmp = [...list];
  const result = [];
  while (tmp.length) {
    // берем последний элемент, чтоб не нарушать очередность
    const item = tmp.pop();
    if (Array.isArray(item)) {
      // Если item массив, разворачиваем его, не меняя входящий list
      tmp.push(...item);
    } else {
      result.push(item);
    }
  }
  return result.reverse();
}

console.log(flattenRecursion(list));
console.log(flattenRecursion(list2));

console.log(flatten(list));
console.log(flatten(list2));
