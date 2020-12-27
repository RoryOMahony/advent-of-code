import { join } from "path";
import { readFileSync } from "fs";
import { DataDocument } from "./DataDocument";
import { DataFlattener } from "./DataFlattener";
import { IgnoreRedFlattenRule } from "./rules/IgnoreRedFlattenRule";

export function solvePartOne(): number {
  const input = readInput();
  const flattenedData = new DataFlattener([]).flattenData(JSON.parse(input));
  const dataDocument = new DataDocument(flattenedData);
  return dataDocument.calculateSum();
}

export function solvePartTwo(): number {
  const input = readInput();
  const ignoreRedRule = new IgnoreRedFlattenRule();
  const flattenedData = new DataFlattener([ignoreRedRule]).flattenData(
    JSON.parse(input)
  );
  const dataDocument = new DataDocument(flattenedData);
  return dataDocument.calculateSum();
}

function readInput(): string {
  const filePath = join(__dirname, "Input.txt");
  return readFileSync(filePath, "utf8");
}
