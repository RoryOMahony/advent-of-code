import { Reindeer } from "../../../../src/2015/day/14/Reindeer";
import { createProfile } from "../../../../src/2015/day/14/ProfileCreator";
import { simulateRace } from "../../../../src/2015/day/14/Race";

test("should award points to reindeer in the lead", () => {
  const profileA = createProfile(new Reindeer("Rudolph", 2, 3, 3), 20);
  const profileB = createProfile(new Reindeer("Donner", 2, 5, 5), 20);
  const profileC = createProfile(new Reindeer("Blitzen", 1, 1, 10), 20);

  const orderedReindeer = simulateRace([profileA, profileB, profileC], 20);
  expect(orderedReindeer).toEqual([
    profileB.getReindeer(),
    profileA.getReindeer(),
    profileC.getReindeer()
  ]);
});

test("should award all tied reindeer points", () => {
  const profileA = createProfile(new Reindeer("Rudolph", 2, 2, 3), 20);
  const profileB = createProfile(new Reindeer("Donner", 2, 2, 3), 20);
  const profileC = createProfile(new Reindeer("Blitzen", 2, 2, 3), 20);

  const orderedReindeer = simulateRace([profileA, profileB, profileC], 20);
  const expectedPoints = 20;
  for (const reindeer of orderedReindeer) {
    expect(reindeer.getPoints()).toBe(expectedPoints);
  }
});
