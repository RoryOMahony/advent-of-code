import { Circuit } from "../Circuit";

export interface Gate {
  wireIdentity: string;
  outputValue: number | undefined;
  getOutputWireIdentiy(): string;
  getOutputWireValue(circuit: Circuit): number;
  calculateOutputWireValue(circuit: Circuit): number;
}
