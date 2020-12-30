import { Reindeer } from "../../../../src/2015/day/14/Reindeer";
import { createProfile } from "../../../../src/2015/day/14/ProfileCreator";

test("should create profile with expected distances", () => {
  const reindeer = new Reindeer("Rudolph", 2, 2, 3);
  const profile = createProfile(reindeer, 20);

  expect(profile.getDistance(0)).toBe(0);
  // flying
  expect(profile.getDistance(1)).toBe(2);
  expect(profile.getDistance(2)).toBe(4);
  // rest
  expect(profile.getDistance(3)).toBe(4);
  expect(profile.getDistance(4)).toBe(4);
  expect(profile.getDistance(5)).toBe(4);
  // flying
  expect(profile.getDistance(6)).toBe(6);
  expect(profile.getDistance(7)).toBe(8);
  // rest
  expect(profile.getDistance(8)).toBe(8);
  expect(profile.getDistance(9)).toBe(8);
  expect(profile.getDistance(10)).toBe(8);
  // flying
  expect(profile.getDistance(11)).toBe(10);
  expect(profile.getDistance(12)).toBe(12);
  // rest
  expect(profile.getDistance(13)).toBe(12);
  expect(profile.getDistance(14)).toBe(12);
  expect(profile.getDistance(15)).toBe(12);
});
