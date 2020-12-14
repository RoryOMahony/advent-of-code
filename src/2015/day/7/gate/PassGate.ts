import { Gate } from "./Gate";
import { Circuit } from "../Circuit";
import { GateImpl } from "./GateImpl";

export class PassGate extends GateImpl {
  inputValue: string;

  constructor(input: string) {
    const values = input.split(" ");
    super(values[2]);
    this.inputValue = values[0];
  }

  calculateOutputWireValue(circuit: Circuit): number {
    if (!isNaN(parseInt(this.inputValue))) {
      return parseInt(this.inputValue);
    }
    return circuit.getValue(this.inputValue);
  }
}
