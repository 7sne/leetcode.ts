// babad
// bab

function longestPalindrome(s: string): any {
  let start = 0;
  let current = s[0];
  const substrs = new Set<string>();
  s.split("").forEach((item, index) => {
    if (index !== 0 && item === current) {
      const sub = s.slice(start, index + 1);
      const reverse = sub.split("").reverse().join("");
      console.log("sub:", sub);
      if (sub === reverse) substrs.add(sub);
    }
  });
  let longest = 0;
  let longestStr = "";
  substrs.forEach(item => {
    if (item.length > longest) {
      longest = item.length;
      longestStr = item;
    }
  });
  return longestStr;
}

export function main04() {
  const res = longestPalindrome("cbbd");
  console.log(res);
}

main04();
