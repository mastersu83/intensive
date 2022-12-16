function range(start, end, step, isRight) {
  let result = [];
  if (!step && step !== 0) {
    if (start < 0 || end < 0) {
      step = -1;
    } else {
      step = 1;
    }

    if (!end) {
      end = start;
      start = 0;
    }
  } else if (step === 0) {
    return Array.from({ length: end - start }, () => start);
  }

  result = Array.from(
    { length: (end - start) / step },
    (_, i) => start + i * step
  );

  return isRight ? result.reverse() : result;
}

const rangeRight = (start, end, step) => {
  return range(start, end, step, true);
};

console.log(range(4));
console.log(rangeRight(4));
console.log(range(-4));
console.log(rangeRight(-4));
console.log(range(1, 5));
console.log(rangeRight(1, 5));
console.log(range(0, 20, 5));
console.log(rangeRight(0, 20, 5));
console.log(range(0, -4, -1));
console.log(rangeRight(0, -4, -1));
console.log(range(1, 4, 0));
console.log(rangeRight(1, 4, 0));
console.log(range(0));
console.log(rangeRight(0));
