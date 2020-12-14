import { Circuit } from "../Circuit";
import { GateImpl } from "./GateImpl";

export class LeftShiftGate extends GateImpl {
  input: string;
  shiftBy: number;

  constructor(input: string) {
    const values = input.split(" ");
    super(values[4]);
    this.input = values[0];
    this.shiftBy = parseInt(values[2]);
  }

  calculateOutputWireValue(circuit: Circuit): number {
    return circuit.getValue(this.input) << this.shiftBy;
  }
}
