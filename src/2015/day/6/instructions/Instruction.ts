export interface Instruction {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  getFromX(): number;
  getFromY(): number;
  getToX(): number;
  getToY(): number;
  apply(input: number): number;
}
