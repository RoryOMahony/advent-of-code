import {
  generatePassword,
  validatePassword,
  incrementPassword
} from "../../../../src/2015/day/11/PasswordGenerator";

test("should validate password", () => {
  expect(validatePassword("hijklmmn")).toBe(false);
  expect(validatePassword("abbceffg")).toBe(false);
  expect(validatePassword("abbcegjk")).toBe(false);
  expect(validatePassword("aabbaabc")).toBe(true);
});

test("should increment password", () => {
  expect(incrementPassword("aaaaaaaa", 7)).toBe("aaaaaaab");
  expect(incrementPassword("aaaaaaay", 7)).toBe("aaaaaaaz");
  expect(incrementPassword("aaaaaaaz", 7)).toBe("aaaaaaba");
  expect(incrementPassword("azzzzzzz", 7)).toBe("baaaaaaa");
  expect(incrementPassword("aaaaaaaa", 0)).toBe("baaaaaaa");
});

test("should generate expected password", () => {
  expect(generatePassword("abcdefgh")).toBe("abcdffaa");
  expect(generatePassword("ghijklmn")).toBe("ghjaabcc");
});
