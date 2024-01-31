import { argumentsLength } from './argumentsLength';

describe('argumentsLength', () => {
  it('should return the number of arguments passed to the method', () => {
    expect(argumentsLength()).toBe(0);
    expect(argumentsLength(5)).toBe(1);
    expect(argumentsLength(100, 200)).toBe(2);
    expect(argumentsLength('a', 'b', 'c')).toBe(3);
    expect(argumentsLength({},null,"3")).toBe(3);
    expect(argumentsLength(true, false, true, false)).toBe(4);
  });
});
