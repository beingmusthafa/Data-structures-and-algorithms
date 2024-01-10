var findLongestWord = function (s, dictionary) {
  let matches = [""];
  for (let word of dictionary) {
    let present = true;
    let startIndex = 0;
    for (let i = 0; i < word.length; i++) {
      let charExists = false;
      for (let j = startIndex; j < s.length; j++) {
        if (word[i] === s[j]) {
          startIndex = j + 1;
          charExists = true;
          break;
        }
      }
      if (!charExists) {
        present = false;
        break;
      }
    }
    if (present && word.length > matches[0].length) {
      matches = [word];
    } else if (present && word.length == matches[0].length) {
      matches.push(word);
    }
  }
  matches.sort((a, b) => a.localeCompare(b));
  return matches[0];
};

findLongestWord("abpcplea", ["a", "b", "c"]);
