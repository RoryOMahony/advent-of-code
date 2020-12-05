import { readFileSync } from "fs";
import { join } from "path";
import { PresentDelivery } from "./PresentDelivery";
import { PresentDeliverySystem } from "./PresentDeliverySystem";

export function solvePartOne(): number {
  const input = readInput();
  const presentDelivery = new PresentDelivery();
  presentDelivery.deliverPresents(input);
  return presentDelivery.getNumOfHousesVisited();
}

export function solvePartTwo(): number {
  const input = readInput();
  const presentDeliverySystem = new PresentDeliverySystem();
  presentDeliverySystem.deliverPresents(input);
  return presentDeliverySystem.getNumOfUniqueHousesVisited();
}

function readInput(): string {
  const filePath = join(__dirname, "Input.txt");
  return readFileSync(filePath, "utf8");
}
