import { isValid } from "../../../../src/2015/day/5/OriginalStringValidator";

test("should be valid", () => {
  expect(isValid("ugknbfddgicrmopn")).toBeTruthy();
  expect(isValid("aaa")).toBeTruthy();
});

test("should be invalid", () => {
  expect(isValid("jchzalrnumimnmhp")).toBeFalsy();
  expect(isValid("ahaegwjzuvuyypxyuaa")).toBeFalsy();
  expect(isValid("dvszwmarrgswjxmb")).toBeFalsy();
});
