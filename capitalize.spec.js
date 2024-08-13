const capitalize = require("./capitalize");

describe("Capitalize", function () {
  test("if string a-zA-z as first char", function () {
    expect(capitalize("haRoLd")).toMatch(/[A-Z]/);
  });

  test("if string has special char as first char", function () {
    expect(capitalize("@aRoLd")).toBe('Please input a-zA-z as first character only');
  });

  test("if string has 0-9 as first char", function () {
    expect(capitalize("921aRoLd")).toBe('Please input a-zA-z as first character only');
  });
});
