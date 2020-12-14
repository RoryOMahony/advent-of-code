import { Gate } from "./Gate";
import { Circuit } from "../Circuit";
import { GateImpl } from "./GateImpl";

export class OrGate extends GateImpl {
  inputA: string;
  inputB: string;

  constructor(input: string) {
    const values = input.split(" ");
    super(values[4]);
    this.inputA = values[0];
    this.inputB = values[2];
  }

  calculateOutputWireValue(circuit: Circuit): number {
    return circuit.getValue(this.inputA) | circuit.getValue(this.inputB);
  }
}
