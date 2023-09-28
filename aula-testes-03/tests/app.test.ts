import calculator from "calculator";

describe("Basic Arithmethic Operations", () => {
  it("Should return the sum of two values", () => {
    const result = calculator.sum(2, 2);
    expect(result).toEqual(4);
  });

  it("Should return the difference between two values", () => {
    const result = calculator.sub(2, 2);
    expect(result).toEqual(0);
  });

  it("Should return the product between two values", () => {
    const result = calculator.mul(2, 2);
    expect(result).toEqual(4);
  });

  it("Should return the quotient between two values", () => {
    const result = calculator.div(2, 2);
    expect(result).toEqual(1);
  });
});
