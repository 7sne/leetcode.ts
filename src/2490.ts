function isCircularSentence(sentence: string): boolean {
  for (let i = 0; i < sentence.length - 1; i++) {
    if (sentence[i] === " " && sentence[i - 1] !== sentence[i + 1])
      return false;
  }
  if (sentence[0] !== sentence.at(-1)) {
    return false;
  }
  return true;
}

const expected: [string, boolean][] = [
  ["MuFoevIXCZzrpXeRmTssj lYSW U jM", false],
  ["leetcode", false],
  ["leetcode exercises sound delightful", true],
  ["eetcode", true],
  ["Leetcode is cool", false],
  ["leetcode exercises sound delightful", true],
  ["I like Leetcode", false],
];

for (const [sentence, answer] of expected) {
  const actual = isCircularSentence(sentence);
  if (actual !== answer) throw new Error(`Issue at sentence ${sentence}.`);
}
