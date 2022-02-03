function lengthOfLongestSubstring(s: string): number {
  let longest = 0;
  let current = "";
  const seen = new Set<string>();
  s.split("").forEach(char => {
    longest = Math.max(longest, current.length);
    if (seen.has(char)) {
      current = "";
      seen.add(char);
    } else current += char;
    seen.add(char);
  });
  return longest;
}

export function main03() {
  // todo: its not working correctly
  const result = lengthOfLongestSubstring("abcabcbb");
  const result2 = lengthOfLongestSubstring("bbbbb");
  const result3 = lengthOfLongestSubstring("pwwkew");
  //   console.log(result, result2, result3);
}

main03();
