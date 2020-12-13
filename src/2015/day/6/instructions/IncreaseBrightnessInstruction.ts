import { Instruction } from "./Instruction";
import { InstructionImpl } from "./InstructionImpl";

export class IncreaseBrightnessInstruction extends InstructionImpl {
  increaseBy: number;

  constructor(
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    increaseBy: number
  ) {
    super(fromX, fromY, toX, toY);
    this.increaseBy = increaseBy;
  }

  apply(input: number): number {
    return input + this.increaseBy;
  }
}
