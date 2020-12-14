import { Gate } from "./gate/Gate";
import { AndGate } from "./gate/AndGate";
import { OrGate } from "./gate/OrGate";
import { NotGate } from "./gate/NotGate";
import { RightShiftGate } from "./gate/RightShiftGate";
import { LeftShiftGate } from "./gate/LeftShiftGate";
import { PassGate } from "./gate/PassGate";

export function createGate(input: string): Gate {
  if (input.includes("AND")) {
    return new AndGate(input);
  }
  if (input.includes("OR")) {
    return new OrGate(input);
  }
  if (input.includes("NOT")) {
    return new NotGate(input);
  }
  if (input.includes("RSHIFT")) {
    return new RightShiftGate(input);
  }
  if (input.includes("LSHIFT")) {
    return new LeftShiftGate(input);
  }
  return new PassGate(input);
}
