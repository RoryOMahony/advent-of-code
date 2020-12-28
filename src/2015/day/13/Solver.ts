import { join } from "path";
import { readFileSync } from "fs";
import { parseSeatingInfo } from "./SeatingInfoParser";
import { Person } from "./Person";
import {
  calculateOptimumSeatingArrangement,
  calculateOverallHappiness
} from "./SeatingArrangement";
import { People } from "./People";

export function solvePartOne(): number {
  const input = readInput();
  const seatingInfo = parseSeatingInfo(splitInput(input));

  const people: People = new People();
  for (const info of seatingInfo) {
    let person = people.getOrCreatePerson(info.getWho());
    person.addHappinessInfo(info.getSeatedBy(), info.getHappiness());
  }

  const optimalArrangement: Person[] = calculateOptimumSeatingArrangement(
    people.getPeople()
  );
  return calculateOverallHappiness(optimalArrangement);
}

export function solvePartTwo(): number {
  const input = readInput();
  const seatingInfo = parseSeatingInfo(splitInput(input));

  const people: People = new People();
  for (const info of seatingInfo) {
    let person = people.getOrCreatePerson(info.getWho());
    person.addHappinessInfo(info.getSeatedBy(), info.getHappiness());
  }
  people.addPerson("myself");

  const optimalArrangement: Person[] = calculateOptimumSeatingArrangement(
    people.getPeople()
  );
  return calculateOverallHappiness(optimalArrangement);
}

function readInput(): string {
  const filePath = join(__dirname, "Input.txt");
  return readFileSync(filePath, "utf8");
}

function splitInput(inputs: string): Array<string> {
  return inputs.split(/\r?\n/);
}
