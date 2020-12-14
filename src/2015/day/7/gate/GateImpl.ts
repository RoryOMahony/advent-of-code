import { Gate } from "./Gate";
import { Circuit } from "../Circuit";

export abstract class GateImpl implements Gate {
  wireIdentity: string;
  outputValue: number | undefined;

  constructor(wireIdentity: string) {
    this.wireIdentity = wireIdentity;
  }

  getOutputWireIdentiy(): string {
    return this.wireIdentity;
  }

  getOutputWireValue(circuit: Circuit): number {
    if (this.outputValue === undefined || this.outputValue === -1) {
      this.outputValue = this.calculateOutputWireValue(circuit);
    }
    return this.outputValue;
  }

  abstract calculateOutputWireValue(circuit: Circuit): number;
}
