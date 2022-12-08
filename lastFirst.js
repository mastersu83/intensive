function last(list) {
  if (Array.isArray(list) && list.length > 0) {
    return list[list.length - 1];
  }

  return undefined;
}

function first(list) {
  if (Array.isArray(list) && list.length > 0) {
    return list[0];
  }

  return undefined;
}

const list1 = 23;
const list2 = [1, 2, 3, 4];
const list3 = ["1", "2", "3", "4"];
const list4 = "Hello World!";

console.log(last(list1));
console.log(first(list1));

console.log(last(list2));
console.log(first(list2));

console.log(last(list3));
console.log(first(list3));

console.log(last(list4));
console.log(first(list4));
