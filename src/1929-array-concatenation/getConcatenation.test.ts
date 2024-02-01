import { getConcatenation } from "./getConcatenation";

describe('getConcatenation', () => {
  it('should return double the arrays that is passed in', () => {
    expect(getConcatenation([1, 2, 3])).toEqual([1, 2, 3, 1, 2, 3]);
    expect(getConcatenation([7, 8, 9, 10, 11])).toEqual([7, 8, 9, 10, 11, 7, 8, 9, 10, 11]);
  });
});
