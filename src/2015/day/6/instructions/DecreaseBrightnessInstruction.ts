import { InstructionImpl } from "./InstructionImpl";

export class DecreaseBrightnessInstruction extends InstructionImpl {
  constructor(fromX: number, fromY: number, toX: number, toY: number) {
    super(fromX, fromY, toX, toY);
  }

  apply(input: number): number {
    return Math.max(0, input - 1);
  }
}
