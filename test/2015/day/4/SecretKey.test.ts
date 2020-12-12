import { calculateAnswer } from "../../../../src/2015/day/4/SecretKey";

test("should return answer for input", () => {
  expect(calculateAnswer("abcdef", /^0{5,}/)).toBe(609043);
  expect(calculateAnswer("pqrstuv", /^0{5,}/)).toBe(1048970);
});
