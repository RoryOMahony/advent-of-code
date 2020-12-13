import { Instruction } from "../instructions/Instruction";
import { TurnOnInstruction } from "../instructions/TurnOnInstruction";
import { ToggleInstruction } from "../instructions/ToggleInstruction";
import { TurnOffInstruction } from "../instructions/TurnOffInstruction";
import { InstructionFactory } from "./InstructionFactory";
import { IncreaseBrightnessInstruction } from "../instructions/IncreaseBrightnessInstruction";
import { DecreaseBrightnessInstruction } from "../instructions/DecreaseBrightnessInstruction";

export class InstructionFactoryImpl implements InstructionFactory {
  createInstruction(
    input: string,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number
  ): Instruction {
    switch (input) {
      case "turn on":
        return new IncreaseBrightnessInstruction(fromX, fromY, toX, toY, 1);
      case "toggle":
        return new IncreaseBrightnessInstruction(fromX, fromY, toX, toY, 2);
      case "turn off":
        return new DecreaseBrightnessInstruction(fromX, fromY, toX, toY);
      default:
        throw "Input is not an instruction";
    }
  }
}
