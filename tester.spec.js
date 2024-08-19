const test = require('./test')

describe("tester", () => {
  test("return the following array properties", () => {
    const result = analyzeArray([1,8,3,4,2,6]);

    // Check if the result equals the expected object
    expect(result).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     });
  });
});