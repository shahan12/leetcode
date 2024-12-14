var compress = function (chars) {
  chars.push("End");
  let times = 0;
  let current = chars[0];
  while (current !== "End") {
    if (chars[0] === current) {
      times++;
      chars.shift();
    } else {
      chars.push(current);
      times > 1 && chars.push(...(times + ""));
      times = 0;
      current = chars[0];
    }
  }
  chars.shift();
  return chars.length;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
