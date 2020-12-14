import { Circuit } from "../../../../src/2015/day/7/Circuit";
import { createGate } from "../../../../src/2015/day/7/GateFactory";

test("should set correct values on wires", () => {
  const circuit = new Circuit();

  circuit.setGate(createGate("b -> a"));
  expect(circuit.getValue("a")).toBe(-1);

  circuit.setGate(createGate("1 -> b"));
  expect(circuit.getValue("a")).toBe(1);
  expect(circuit.getValue("b")).toBe(1);

  expect(circuit.getValue("d")).toBe(-1);

  circuit.setGate(createGate("123 -> x"));
  expect(circuit.getValue("x")).toBe(123);

  circuit.setGate(createGate("456 -> y"));
  expect(circuit.getValue("y")).toBe(456);

  circuit.setGate(createGate("x AND y -> d"));
  expect(circuit.getValue("d")).toBe(72);

  circuit.setGate(createGate("x OR y -> e"));
  expect(circuit.getValue("e")).toBe(507);

  circuit.setGate(createGate("x LSHIFT 2 -> f"));
  expect(circuit.getValue("f")).toBe(492);

  circuit.setGate(createGate("y RSHIFT 2 -> g"));
  expect(circuit.getValue("g")).toBe(114);

  circuit.setGate(createGate("NOT x -> h"));
  expect(circuit.getValue("h")).toBe(65412);

  circuit.setGate(createGate("NOT y -> i"));
  expect(circuit.getValue("i")).toBe(65079);
});
