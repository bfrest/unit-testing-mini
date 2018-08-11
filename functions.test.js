const functions = require("./functions.js");

describe("returnTwo", () => {
  it("returns the number 2", () => {
    expect(functions.returnTwo()).toEqual(2);
  });
});

describe("greeting", () => {
  it("will return hello with a dynamic name as a parameter", () => {
    expect(functions.greeting("brendon")).toEqual("Hello, brendon.");
    expect(functions.greeting("Jack")).toEqual("Hello, Jack.");
  });
});

//!! you can group together types of tests to keep them clean!!!
describe("Math Functions", () => {
  test("add() should return dynamic sum based on the params", () => {
    expect(functions.add(2, 3)).toBe(5);
    expect(functions.add(4, 6)).toBe(10);
  });

  test("subtract() should return dynamic difference based on the params", () => {
    expect(functions.subtract(3, 3)).toBe(0);
    expect(functions.subtract(4, 6)).toBe(-2);
  });

  test("multiply() should return dynamic product based on the params", () => {
    expect(functions.multiply(2, 3)).toBe(6);
    expect(functions.multiply(4, 6)).toBe(24);
  });

  test("divide() should return dynamic sum based on the params", () => {
    expect(functions.divide(15, 3)).toBe(5);
    expect(functions.divide(100, 10)).toBe(10);
  });
});
