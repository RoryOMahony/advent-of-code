import { Instruction } from "./Instruction";

export abstract class InstructionImpl implements Instruction {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;

  constructor(fromX: number, fromY: number, toX: number, toY: number) {
    this.fromX = fromX;
    this.fromY = fromY;
    this.toX = toX;
    this.toY = toY;
  }

  getFromX(): number {
    return this.fromX;
  }
  getFromY(): number {
    return this.fromY;
  }
  getToX(): number {
    return this.toX;
  }
  getToY(): number {
    return this.toY;
  }

  abstract apply(input: number): number;
}
