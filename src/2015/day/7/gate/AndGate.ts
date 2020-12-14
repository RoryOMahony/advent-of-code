import { GateImpl } from "./GateImpl";
import { Circuit } from "../Circuit";

export class AndGate extends GateImpl {
  inputA: string;
  inputB: string;

  constructor(input: string) {
    const values = input.split(" ");
    super(values[4]);
    this.inputA = values[0];
    this.inputB = values[2];
  }

  calculateOutputWireValue(circuit: Circuit): number {
    const inputValueA = this.calculateValue(this.inputA, circuit);
    const inputValueB = this.calculateValue(this.inputB, circuit);
    return inputValueA & inputValueB;
  }

  calculateValue(input: string, circuit: Circuit): number {
    return !isNaN(parseInt(input)) ? parseInt(input) : circuit.getValue(input);
  }
}
