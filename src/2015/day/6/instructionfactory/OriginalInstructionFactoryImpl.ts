import { Instruction } from "../instructions/Instruction";
import { TurnOnInstruction } from "../instructions/TurnOnInstruction";
import { ToggleInstruction } from "../instructions/ToggleInstruction";
import { TurnOffInstruction } from "../instructions/TurnOffInstruction";
import { InstructionFactory } from "./InstructionFactory";

export class OriginalInstructionFactoryImpl implements InstructionFactory {
  createInstruction(
    input: string,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number
  ): Instruction {
    switch (input) {
      case "turn on":
        return new TurnOnInstruction(fromX, fromY, toX, toY);
      case "toggle":
        return new ToggleInstruction(fromX, fromY, toX, toY);
      case "turn off":
        return new TurnOffInstruction(fromX, fromY, toX, toY);
      default:
        throw "Input is not an instruction";
    }
  }
}
