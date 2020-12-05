import { readFileSync } from "fs";
import { join } from "path";
import { Present } from "./Present";

export function solvePartOne(): number {
  const input = readInput();
  const presents: Array<Present> = createPresents(input);
  return presents.reduce(
    (result, current) => result + current.getRequiredWrappingPaperAmount(),
    0
  );
}

export function solvePartTwo(): number {
  const input = readInput();
  const presents: Array<Present> = createPresents(input);
  return presents.reduce(
    (result, current) => result + current.getTotalRequiredRibbonLength(),
    0
  );
}

function readInput(): string {
  const filePath = join(__dirname, "Input.txt");
  return readFileSync(filePath, "utf8");
}

function createPresents(input: string): Array<Present> {
  const presents: Array<Present> = new Array<Present>();

  const presentDimentions: Array<string> = input.split(/\r?\n/);
  for (const presentDimention of presentDimentions) {
    const dimentions = presentDimention.split("x");
    const length = parseInt(dimentions[0]);
    const width = parseInt(dimentions[1]);
    const height = parseInt(dimentions[2]);
    presents.push(new Present(length, width, height));
  }

  return presents;
}
