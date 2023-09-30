var lengthOfLastWord = function (s) {
  let word = s.split(" ");
  const res = [];
  word.forEach((element) => {
    if (element.length > 0) {
      res.push(element);
    }
  });
  return res.at(-1).length;
};
console.log(lengthOfLastWord("   fly me   to   the moon  "));
