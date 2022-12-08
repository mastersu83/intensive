const tree = (lvl) => {
  if (
    (typeof lvl !== "string" || lvl instanceof String) &&
    (typeof lvl !== "number" || lvl instanceof Number)
  ) {
    console.log(TypeError);
    return;
  }

  if (Number(lvl) < 3) {
    console.log(null);
    return;
  }
  let starCount = Number(lvl);

  let space = " ";
  let star = "*";
  while (Number(lvl) > 1) {
    lvl -= 1;
    console.log(
      Array(Number(lvl)).join(space) +
        Array(2 * (starCount - Number(lvl))).join(star) +
        Array(Number(lvl)).join(space)
    );
  }
  console.log(Array(starCount - 1).join(space) + "|");
};

tree([21]);
