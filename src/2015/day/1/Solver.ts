import { readFileSync } from "fs";
import { join } from "path";
import { calculateFloor, findBasementInstruction } from "./BuildingTraverser";

export function solvePartOne(): number {
  const input: string = readInput();
  return calculateFloor(input);
}

export function solvePartTwo(): number {
  const input: string = readInput();
  return findBasementInstruction(input);
}

function readInput(): string {
  const filePath = join(__dirname, "Input.txt");
  return readFileSync(filePath, "utf8");
}
