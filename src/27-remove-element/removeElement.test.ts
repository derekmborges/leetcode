import { removeElement } from './removeElement';

describe('removeElement', () => {
  it('should return 2', () => {
    const nums: number[] = [3, 2, 2, 3];
    const val: number = 3 // Value to remove
    const expectedNums: number[] = [2,2];

    const k = removeElement(nums, val);

    const remaining = nums.sort();
    expect(k).toBe(expectedNums.length);
    for (let i = 0; i < expectedNums.length; i++) {
      expect(nums[i]).toBe(remaining[i]);
    }
  });

  it('should return 5', () => {
    const nums: number[] = [0, 1, 2, 2, 3, 0, 4, 2];
    const val: number = 2 // Value to remove
    const expectedNums: number[] = [0,1,4,0,3];

    const k = removeElement(nums, val);
    
    const remaining = nums.sort();
    expect(k).toBe(expectedNums.length);
    for (let i = 0; i < expectedNums.length; i++) {
      expect(nums[i]).toBe(remaining[i]);
    }
  });
});
