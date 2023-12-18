// d := 112 % 2, r :=
// 4 % 2 - 0
// 2 % 2 - 0
// 1 % 2 - 1

function intToBinary(int: number): string {
  let x = int;
  let bin = "";
  while (x >= 1) {
    x = Math.floor(x / 2);
    bin = (x % 2 === 0 ? 0 : 1) + bin;
  }
  return bin;
}

function minimizeXor(num1: number, num2: number): number {
  const countBits = (n: any) =>
    [...n.toString(2)].reduce((acc, c) => {
      return c === "1" ? (acc += 1) : acc;
    }, 0);

  const a = [num1, num2].map(countBits);

  console.log(a);
}

console.log(minimizeXor(3, 5));
