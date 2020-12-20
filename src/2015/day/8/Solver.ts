import { join } from "path";
import { readFileSync } from "fs";
import { Name } from "./Name";

export function solvePartOne(): number {
  const input = readInput();
  const namesList = splitInput(input);

  let chars = 0;
  let memory = 0;

  namesList.forEach(nameInput => {
    const name = new Name(nameInput);
    chars += name.getNumOfCharOfCode();
    memory += name.getNumOfCharInMem();
  });

  return chars - memory;
}

export function solvePartTwo(): number {
  const input = readInput();
  const namesList = splitInput(input);

  let totalNumOfCharsForEncodedNames = 0;
  let totalNumOfCharsForOriginalNames = 0;

  namesList.forEach(nameInput => {
    const name = new Name(nameInput);
    totalNumOfCharsForEncodedNames += name.getEncodedLength();
    totalNumOfCharsForOriginalNames += name.getNumOfCharOfCode();
  });

  return totalNumOfCharsForEncodedNames - totalNumOfCharsForOriginalNames;
}

function readInput(): string {
  const filePath = join(__dirname, "Input.txt");
  return readFileSync(filePath, "utf8");
}

function splitInput(inputs: string): Array<string> {
  return inputs.split(/\r?\n/);
}
