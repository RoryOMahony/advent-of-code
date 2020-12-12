export function countValidStrings(inputs: Array<string>) {
  return inputs.reduce((acc, cur) => (isValid(cur) ? acc + 1 : acc), 0);
}

export function isValid(input: string): boolean {
  return (
    containsRepeatingPairOfLetters(input) &&
    containsLetterSplittingRepeatedLetters(input)
  );
}

//xyxy, aabcdefgaa
function containsRepeatingPairOfLetters(input: string): boolean {
  return /(..).*\1/.test(input);
}

//xyx, abcdefeghi
function containsLetterSplittingRepeatedLetters(input: string): boolean {
  return /(.).\1/.test(input);
}
