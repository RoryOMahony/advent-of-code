export function countValidStrings(inputs: Array<string>) {
  return inputs.reduce((acc, cur) => (isValid(cur) ? acc + 1 : acc), 0);
}

export function isValid(input: string): boolean {
  return (
    containsMinThreeVowels(input) &&
    containsRepeatedLetter(input) &&
    doesNotContainInvalidStrings(input)
  );
}

function containsMinThreeVowels(input: string): boolean {
  const vowels = input.match(/[aeiou]/g);
  return vowels ? vowels.length >= 3 : false;
}

function containsRepeatedLetter(input: string): boolean {
  return /(.)\1/.test(input);
}

function doesNotContainInvalidStrings(input: string): boolean {
  return !/ab|cd|pq|xy/.test(input);
}
