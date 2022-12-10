function euclid(...args) {
  let a = args[0];

  for (let i = 1; i < args.length; i++) {
    let b = args[i];
    if (a < 0 || b < 0) {
      return console.log(-1);
    }
    while (a && b) {
      a > b ? (a %= b) : (b %= a);
    }
    a += b;
  }
  console.log(a);
}

euclid(28, 16, 346, 5648);
