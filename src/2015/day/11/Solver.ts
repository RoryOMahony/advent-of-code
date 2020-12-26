import { generatePassword } from "./PasswordGenerator";

export function solvePartOne(): string {
  const PUZZLE_INPUT = "cqjxjnds";
  return generatePassword(PUZZLE_INPUT);
}

export function solvePartTwo(): string {
  const PUZZLE_INPUT = "cqjxxyzz";
  return generatePassword(PUZZLE_INPUT);
}
