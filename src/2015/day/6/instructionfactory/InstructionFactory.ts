import { Instruction } from "../instructions/Instruction";

export interface InstructionFactory {
  createInstruction(
    input: string,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number
  ): Instruction;
}
