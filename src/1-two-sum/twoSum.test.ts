import { twoSum } from './twoSum';

describe('twoSum', () => {
  it('returns the indices of two numbers that add up to the target', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    expect(result).toEqual([0, 1]);
  });

  it('returns the indices of two numbers that add up to the target', () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result).toEqual([1, 2]);
  });

  it('returns the indices of two numbers that add up to the target', () => {
    const nums = [0, 4, 3, 0];
    const target = 0;
    const result = twoSum(nums, target);
    expect(result).toEqual([0, 3]);
  });

  it('returns an empty array if no two numbers add up to the target', () => {
    const nums = [2, 7, 11, 15];
    const target = 3;
    const result = twoSum(nums, target);
    expect(result).toEqual([]);
  });
});
