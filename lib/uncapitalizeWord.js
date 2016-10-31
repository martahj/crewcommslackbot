const uncapitalizeWord = word => (
  [
    word[0].toLowerCase(),
    word.slice(1),
  ].join('')
);
export default uncapitalizeWord;
