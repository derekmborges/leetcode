
export const removeElement = (nums: number[], val: number): number => {
  const remainingNums: number[] = nums.filter(n => n !== val);
  let i = 0;
  while (i < remainingNums.length) {
    console.log('ia:', i);
    nums[i] = remainingNums[i];
    i++;
  }
  while (i < nums.length) {
    console.log('ib:', i);
    nums.pop();
    i++;
  }

  return remainingNums.length;
}
