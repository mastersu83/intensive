const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const bubbleSort = (arr) => {
  const tmp = [...arr];
  for (let i = 0; i < tmp.length - 1; i++) {
    for (let j = 0; j < tmp.length - 1; j++) {
      if (tmp[j] > tmp[j + 1]) {
        let swap = tmp[j];
        tmp[j] = tmp[j + 1];
        tmp[j + 1] = swap;
      }
    }
  }
  return tmp;
};

console.log(bubbleSort(arr));
