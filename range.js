function range(start, end, step) {
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

  return Array.from(
    { length: (end - start) / step },
    (_, i) => start + i * step
  );
}

console.log(range(4));
console.log(range(-4));
console.log(range(1, 5));
console.log(range(0, 20, 5));
console.log(range(0, -4, -1));
console.log(range(1, 4, 0));
console.log(range(0));
