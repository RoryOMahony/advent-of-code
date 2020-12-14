import { Gate } from "./gate/Gate";

export class Circuit {
  gates: Map<string, Gate>;

  constructor() {
    this.gates = new Map<string, Gate>();
  }

  setGate(gate: Gate): void {
    this.gates.set(gate.getOutputWireIdentiy(), gate);
  }

  getValue(wire: string): number {
    const gate = this.gates.get(wire);
    return gate !== undefined ? gate.getOutputWireValue(this) : -1;
  }
}
