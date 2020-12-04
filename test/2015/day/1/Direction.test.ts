import {
  Direction,
  createDirection
} from "../../../../src/2015/day/1/Direction";

test("creates UP direction", () => {
  expect(createDirection("(")).toBe(Direction.UP);
});

test("creates DOWN direction", () => {
  expect(createDirection(")")).toBe(Direction.DOWN);
});

test("throws exception when input is not a direction", () => {
  expect(() => {
    createDirection("");
  }).toThrow("'Input' is not a direction");
});
