const input = [
  "кот",
  "пила",
  "барокко",
  "стоп",
  "ток",
  "кошка",
  "липа",
  "коробка",
  "пост",
];

const anagram = (input) => {
  let res = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      let first = input[i].split("").sort().join("");
      let second = input[j].split("").sort().join("");
      if (first === second) {
        res.push([input[i], input[j]].sort());
      }
    }
  }
  return res.sort();
};

console.log(anagram(input));
