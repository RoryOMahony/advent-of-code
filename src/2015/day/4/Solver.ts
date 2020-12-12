import { calculateAnswer } from "./SecretKey";

export function solvePartOne(): number {
  const input = "iwrupvqb";
  const validator = /^0{5,}/;
  return calculateAnswer(input, validator);
}

export function solvePartTwo(): number {
  const input = "iwrupvqb";
  const validator = /^0{6}/;
  return calculateAnswer(input, validator);
}
