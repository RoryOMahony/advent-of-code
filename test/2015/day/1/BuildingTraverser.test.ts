import {
  calculateFloor,
  findBasementInstruction
} from "../../../../src/2015/day/1/BuildingTraverser";

test("can traverse up floors", () => {
  expect(calculateFloor("(")).toBe(1);
  expect(calculateFloor("((")).toBe(2);
  expect(calculateFloor("(((")).toBe(3);
});

test("can traverse down floors", () => {
  expect(calculateFloor(")")).toBe(-1);
  expect(calculateFloor("))")).toBe(-2);
  expect(calculateFloor(")))")).toBe(-3);
});

test("can traverse up and down floors", () => {
  expect(calculateFloor("(())")).toBe(0);
  expect(calculateFloor("(()(()(")).toBe(3);
  expect(calculateFloor("))(((((")).toBe(3);
  expect(calculateFloor(")())())")).toBe(-3);
});

test("finds basement instruction", () => {
  expect(findBasementInstruction("))")).toBe(1);
  expect(findBasementInstruction("()())")).toBe(5);
});
