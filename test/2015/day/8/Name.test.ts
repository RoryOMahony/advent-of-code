import { Name } from "../../../../src/2015/day/8/Name";

test("should return expected number of characters of code", () => {
  expect(new Name(`""`).getNumOfCharOfCode()).toBe(2);
  expect(new Name(`"abc"`).getNumOfCharOfCode()).toBe(5);
  expect(new Name(String.raw`"aaa\"aaa'`).getNumOfCharOfCode()).toBe(10);
  expect(new Name(String.raw`"\x27"`).getNumOfCharOfCode()).toBe(6);
  expect(new Name(String.raw`"\xa8br\x8bjr\""`).getNumOfCharOfCode()).toBe(16);
  expect(new Name(String.raw`"daz\\zyyxddpwk"`).getNumOfCharOfCode()).toBe(16);
  expect(new Name(String.raw`"nxzo\"hf\\xp"`).getNumOfCharOfCode()).toBe(14);
  expect(new Name(String.raw`"kwdlysf\\xjpelae"`).getNumOfCharOfCode()).toBe(
    18
  );
  expect(
    new Name(
      String.raw`"nbydghkfvmq\\\xe0\"lfsrsvlsj\"i\x61liif"`
    ).getNumOfCharOfCode()
  ).toBe(41);
});

test("should return expected number of characters in memory", () => {
  expect(new Name(`""`).getNumOfCharInMem()).toBe(0);
  expect(new Name(`"abc"`).getNumOfCharInMem()).toBe(3);
  expect(new Name(String.raw`'aaa\"aaa'`).getNumOfCharInMem()).toBe(7);

  expect(new Name(String.raw`"\x27"`).getNumOfCharInMem()).toBe(1);
  expect(new Name(String.raw`"\\"`).getNumOfCharInMem()).toBe(1);
  expect(new Name(String.raw`"\""`).getNumOfCharInMem()).toBe(1);

  expect(new Name(String.raw`"\x27\x27"`).getNumOfCharInMem()).toBe(2);
  expect(new Name(String.raw`"\\\\"`).getNumOfCharInMem()).toBe(2);
  expect(new Name(String.raw`"\"\""`).getNumOfCharInMem()).toBe(2);
  expect(new Name(String.raw`"\\\""`).getNumOfCharInMem()).toBe(2);
  expect(new Name(String.raw`"\\\x27"`).getNumOfCharInMem()).toBe(2);
  expect(new Name(String.raw`"\"\x27"`).getNumOfCharInMem()).toBe(2);

  expect(new Name(String.raw`"\\x27"`).getNumOfCharInMem()).toBe(4);

  expect(new Name(String.raw`"\xa8br\x8bjr\""`).getNumOfCharInMem()).toBe(7);
  expect(new Name(String.raw`"nxzo\"hf\\xp"`).getNumOfCharInMem()).toBe(10);
  expect(new Name(String.raw`"kwdlysf\\xjpelae"`).getNumOfCharInMem()).toBe(15);
  expect(
    new Name(
      String.raw`"nbydghkfvmq\\\xe0\"lfsrsvlsj\"i\x61liif"`
    ).getNumOfCharInMem()
  ).toBe(30);
});

test("should return expected number of characters for encoded name", () => {
  expect(new Name('""').getEncodedLength()).toBe(6);
  expect(new Name('"abc"').getEncodedLength()).toBe(9);
  expect(new Name('"aaa\\"aaa"').getEncodedLength()).toBe(16);
  expect(new Name('"\\x27"').getEncodedLength()).toBe(11);
});
