const data = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function roman(number) {
  if (!Number(number)) {
    const tmp = number.toUpperCase().split("");

    let result = 0;
    for (let i = 0; i < tmp.length; i += 1) {
      const first = data[tmp[i]];
      const second = data[tmp[i + 1]] ?? 0;
      if (first < second) {
        result += second - first;
        i += 1;
      } else {
        result += first;
      }
    }
    return result;
  }

  let arabToRoman = Object.entries(data).map((o) => {
    return { arab: o[1], roman: o[0] };
  });

  return arabToRoman.reduce((result, currentValue) => {
    while (number >= currentValue.arab) {
      result += currentValue.roman;
      number -= currentValue.arab;
    }
    return result;
  }, "");
}

console.log(roman("xxi"));
