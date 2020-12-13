import { Instruction } from "./Instruction";
import { InstructionImpl } from "./InstructionImpl";

export class ToggleInstruction extends InstructionImpl {
  constructor(fromX: number, fromY: number, toX: number, toY: number) {
    super(fromX, fromY, toX, toY);
  }

  apply(input: number): number {
    return input === 1 ? 0 : 1;
  }
}
