function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (const [index, value] of nums.entries()) {
    if (!map.has(target - value)) map.set(value, index);
    else return [map.get(target - value)!, index];
  }
  return [];
}

function twoSumBruteForce(nums: number[], target: number): number[] {
  for (const [idx, value] of nums.entries()) {
    const current = value;
    for (const [index, value] of nums.entries()) {
      if (current + value === target) return [idx, index];
    }
  }
  return [];
}

twoSum([2, 7, 11, 15], 9);

export function main() {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const result = twoSum(nums, target);
  const result2 = twoSumBruteForce(nums, target);
  // console.log(result);
  // console.log(result2);
}

main();
