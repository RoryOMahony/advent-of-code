import { isValid } from "../../../../src/2015/day/5/StringValidator";

test("should be valid", () => {
  expect(isValid("qjhvhtzxzqqjkmpb")).toBeTruthy();
  expect(isValid("xxyxx")).toBeTruthy();
});

test("should be invalid", () => {
  expect(isValid("uurcxstgmygtbstg")).toBeFalsy();
  expect(isValid("ieodomkazucvgmuy")).toBeFalsy();
});
