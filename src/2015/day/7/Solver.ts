import { join } from "path";
import { readFileSync } from "fs";
import { createGate } from "./GateFactory";
import { Circuit } from "./Circuit";

export function solvePartOne(): number {
  const input = readInput();
  const operations = splitInput(input);

  const circuit = new Circuit();
  operations.forEach(operation => circuit.setGate(createGate(operation)));

  return circuit.getValue("a");
}

export function solvePartTwo(): number {
  const input = readInput();
  const operations = splitInput(input);

  const circuit = new Circuit();
  operations.forEach(operation => circuit.setGate(createGate(operation)));
  circuit.setGate(createGate("46065 -> b"));

  return circuit.getValue("a");
}

function readInput(): string {
  const filePath = join(__dirname, "Input.txt");
  return readFileSync(filePath, "utf8");
}

function splitInput(inputs: string): Array<string> {
  return inputs.split(/\r?\n/);
}
