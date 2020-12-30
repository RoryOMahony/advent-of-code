import { Reindeer } from "./Reindeer";
import { Profile } from "./Profile";

export function createProfile(reindeer: Reindeer, endTime: number): Profile {
  const profile = new Profile(reindeer);

  const flyingTime = reindeer.getFlyingTime();
  const restTime = reindeer.getRestTime();
  const oneIterationTime = flyingTime + restTime;

  let maxSpeed = reindeer.getMaxSpeed();
  let currentDistance = 0;
  for (let i = 0; i <= endTime; i++) {
    const time = i % oneIterationTime;
    if (time < flyingTime) {
      currentDistance += maxSpeed;
    }
    profile.addDistance(currentDistance, i + 1);
  }

  return profile;
}
