import { calculateFinalSequence } from "./LookAndSay";

const PUZZLE_INPUT = "1321131112";

export function solvePartOne(): number {
  return calculateFinalSequence(PUZZLE_INPUT, 40).length;
}

export function solvePartTwo(): number {
  return calculateFinalSequence(PUZZLE_INPUT, 50).length;
}
