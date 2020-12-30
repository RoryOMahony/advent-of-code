import { join } from "path";
import { readFileSync } from "fs";
import { parseReindeer } from "./ReindeerParser";
import { createProfile } from "./ProfileCreator";
import { Profile } from "./Profile";
import { Reindeer } from "./Reindeer";
import { simulateRace } from "./Race";

const END_TIME: number = 2503;

export function solvePartOne(): number {
  const input: string = readInput();
  const reindeer: Reindeer[] = parseReindeer(splitInput(input));
  const profiles: Profile[] = reindeer.map(input =>
    createProfile(input, END_TIME)
  );

  const winningReindeerDistance = profiles.reduce(
    (highestDistance, currentProfile) =>
      Math.max(currentProfile.getDistance(END_TIME), highestDistance),
    Number.NEGATIVE_INFINITY
  );

  return winningReindeerDistance;
}

export function solvePartTwo(): number {
  const input: string = readInput();
  const reindeer: Reindeer[] = parseReindeer(splitInput(input));
  const profiles: Profile[] = reindeer.map(input =>
    createProfile(input, END_TIME)
  );

  const orderedReindeer = simulateRace(profiles, END_TIME);
  return orderedReindeer[0].getPoints();
}

function readInput(): string {
  const filePath = join(__dirname, "Input.txt");
  return readFileSync(filePath, "utf8");
}

function splitInput(inputs: string): Array<string> {
  return inputs.split(/\r?\n/);
}
