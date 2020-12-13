import { Instruction } from "./instructions/Instruction";
import { InstructionFactory } from "./instructionfactory/InstructionFactory";

export function parseInstruction(
  input: string,
  instructionFactory: InstructionFactory
): Instruction {
  const firstNumber = input.match(/\d/);
  if (firstNumber === null || firstNumber.index === undefined) {
    throw "Failed to parse instruction";
  }
  const firstNumberIndex = firstNumber.index;
  const command = input.substring(0, firstNumberIndex).trim();

  const values = input.substring(firstNumberIndex).trim().split(" ");
  const fromValues = values[0].split(",");
  const toValues = values[2].split(",");

  return instructionFactory.createInstruction(
    command,
    parseInt(fromValues[0]),
    parseInt(fromValues[1]),
    parseInt(toValues[0]),
    parseInt(toValues[1])
  );
}
