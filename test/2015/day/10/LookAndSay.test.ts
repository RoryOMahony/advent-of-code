import { calculateSequence } from "../../../../src/2015/day/10/LookAndSay";

test("should return expected sequence", () => {
  expect(calculateSequence("1")).toBe("11");
  expect(calculateSequence("11")).toBe("21");
  expect(calculateSequence("21")).toBe("1211");
  expect(calculateSequence("1211")).toBe("111221");
  expect(calculateSequence("111221")).toBe("312211");
});
