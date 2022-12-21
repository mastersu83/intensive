const rle = (data) => {
  let tmp = data.split("");
  let result = "";
  let count = 1;

  for (let i = 0; i < tmp.length; i++) {
    result += tmp[i];
    for (let j = i + 1; j < tmp.length; j++) {
      if (tmp[i] === tmp[j]) {
        count += 1;
      } else {
        j += tmp.length;
      }
    }
    result += count === 1 ? "" : count;
    i += count - 1;
    count = 1;
  }
  console.log(result);
};

rle("AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD");
