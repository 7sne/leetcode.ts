function isPalindrome(x: number): boolean {
  if (x.toString().split("").reverse().join("") === x.toString())
    return true;
  return false;
}

export function main9() {
  const x = 121;
  const y = -121;
  const z = 10;
  const result = isPalindrome(x);
  const result2 = isPalindrome(y);
  const result3 = isPalindrome(z);
  console.log(result, result2, result3);
}

main9();
