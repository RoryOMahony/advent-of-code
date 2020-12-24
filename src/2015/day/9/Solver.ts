import { join } from "path";
import { readFileSync } from "fs";
import { Locations } from "./Locations";
import { parseJourneyInfo } from "./JourneyInfoParser";

export function solvePartOne(): number {
  const input = readInput();
  const locationDistances = splitInput(input);

  const journeyInfo = locationDistances.map(info => parseJourneyInfo(info));

  const locations = new Locations();
  journeyInfo.forEach(info => locations.addJourneyInfo(info));

  return locations.getShortestRoute();
}

export function solvePartTwo(): number {
  const input = readInput();
  const locationDistances = splitInput(input);

  const journeyInfo = locationDistances.map(info => parseJourneyInfo(info));

  const locations = new Locations();
  journeyInfo.forEach(info => locations.addJourneyInfo(info));
  
  return locations.getLongestRoute();
}

function readInput(): string {
  const filePath = join(__dirname, "Input.txt");
  return readFileSync(filePath, "utf8");
}

function splitInput(inputs: string): Array<string> {
  return inputs.split(/\r?\n/);
}
