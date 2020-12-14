import { Gate } from "./Gate";
import { Circuit } from "../Circuit";
import { GateImpl } from "./GateImpl";

export class NotGate extends GateImpl {
  input: string;

  constructor(input: string) {
    const values = input.split(" ");
    super(values[3]);
    this.input = values[1];
  }

  calculateOutputWireValue(circuit: Circuit): number {
    // JS binary numbers are stored in 32-bit 2's complement, so a NOT is simply an XOR with 0xFFFF to get an unsigned int
    return circuit.getValue(this.input) ^ 0xffff;
  }
}
