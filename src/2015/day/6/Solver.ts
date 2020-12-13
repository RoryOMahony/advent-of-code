import { join } from "path";
import { readFileSync } from "fs";
import { Instruction } from "./instructions/Instruction";
import { parseInstruction } from "./InstructionParser";
import { LightDisplay } from "./LightDisplay";
import { OriginalInstructionFactoryImpl } from "./instructionfactory/OriginalInstructionFactoryImpl";
import { InstructionFactoryImpl } from "./instructionfactory/InstructionFactoryImpl";

export function solvePartOne(): number {
  const input: string = readInput();
  const instructions: Array<string> = splitInput(input);

  const instructionFactory = new OriginalInstructionFactoryImpl();

  const lightDisplay: LightDisplay = new LightDisplay(1000, 1000);
  instructions.forEach(instruction =>
    lightDisplay.applyInstruction(
      parseInstruction(instruction, instructionFactory)
    )
  );

  return lightDisplay.getLitLights();
}

export function solvePartTwo(): number {
  const input: string = readInput();
  const instructions: Array<string> = splitInput(input);

  const instructionFactory = new InstructionFactoryImpl();

  const lightDisplay: LightDisplay = new LightDisplay(1000, 1000);
  instructions.forEach(instruction =>
    lightDisplay.applyInstruction(
      parseInstruction(instruction, instructionFactory)
    )
  );

  return lightDisplay.getTotalBrightness();
}

function readInput(): string {
  const filePath = join(__dirname, "Input.txt");
  return readFileSync(filePath, "utf8");
}

function splitInput(inputs: string): Array<string> {
  return inputs.split(/\r?\n/);
}
