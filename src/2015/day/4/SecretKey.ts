const md5 = require("md5");

export function calculateAnswer(input: string, validator: RegExp): number {
  const maxValue = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < maxValue; i++) {
    const secretKey = input + i;
    if (validator.test(md5(secretKey))) {
      return i;
    }
  }

  return 0;
}
