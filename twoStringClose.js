var closeStrings = function (word1, word2) {
  let map1 = new Map();
  let map2 = new Map();
  if (word1.length != word2.length) {
    return false;
  } else {
    for (let i = 0; i < word1.length; i++) {
      if (map1.get(word1[i])) {
        map1.set(word1[i], map1.get(word1[i]) + 1);
      } else map1.set(word1[i], 1);
    }
    for (let i = 0; i < word1.length; i++) {
      if (map2.get(word2[i])) {
        map2.set(word2[i], map2.get(word2[i]) + 1);
      } else map2.set(word2[i], 1);
    }
    let arrKeys1 = [...map1.keys()].sort((a, b) => a.localeCompare(b));
    let arrKeys2 = [...map2.keys()].sort((a, b) => a.localeCompare(b));
    let valArr1 = [...map1.values()].sort((a, b) => a - b);
    let valArr2 = [...map2.values()].sort((a, b) => a - b);
    return (
      JSON.stringify(arrKeys1) == JSON.stringify(arrKeys2) &&
      JSON.stringify(valArr1) == JSON.stringify(valArr2)
    );
  }
};
console.log(closeStrings("cabbba", "abbccc"));
