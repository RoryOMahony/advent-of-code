import { join } from "path";
import { readFileSync } from "fs";
import { countValidStrings as originalCountValidStrings } from "./OriginalStringValidator";
import { countValidStrings } from "./StringValidator";

export function solvePartOne(): number {
  const input: string = readInput();
  const inputs: Array<string> = splitInput(input);
  return originalCountValidStrings(inputs);
}

export function solvePartTwo(): number {
  const input: string = readInput();
  const inputs: Array<string> = splitInput(input);
  return countValidStrings(inputs);
}

function readInput(): string {
  const filePath = join(__dirname, "Input.txt");
  return readFileSync(filePath, "utf8");
}

function splitInput(inputs: string): Array<string> {
  return inputs.split(/\r?\n/);
}
